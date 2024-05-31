'use server';
import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const addToCart = async (productId, quantity, productSize, userEmail) => {
    const session = await getServerSession();

    if (!session?.user) {
        redirect(
            `/login?cart=true&productId=${productId}&quantity=${quantity}&size=${productSize}`
        );
        return;
    }

    try {
        await connectDB();

        const email = userEmail || session.user.email;
        const parsedQuantity = parseInt(quantity, 10);

        const userData = await User.findOne({ email });

        if (!userData) {
            throw new Error('User not found');
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        product.availability = false;
        await product.save();

        const productExists = userData.carts.some(
            (cart) => cart.productId.toString() === productId
        );

        if (productExists) {
            throw new Error('Product already exists in the cart');
        }

        // Add product to cart
        userData.carts.push({ productId, size: productSize, quantity: parsedQuantity });

        // Remove product from wishlists
        userData.wishlists = userData.wishlists.filter(
            (wishlistId) => wishlistId.toString() !== productId
        );

        await userData.save();

        // Set a timeout to release the product if not purchased within 5 minutes
        setTimeout(async () => {
            const updatedUser = await User.findOne({ email });

            if (updatedUser) {
                const cartItem = updatedUser.carts.find(
                    (cart) => cart.productId.toString() === productId
                );

                if (cartItem) {
                    // Remove from cart and update product inventory
                    updatedUser.carts = updatedUser.carts.filter(
                        (cart) => cart.productId.toString() !== productId
                    );
                    await updatedUser.save();

                    const productToUpdate = await Product.findById(productId);
                    if (productToUpdate) {
                        productToUpdate.availability = true;
                        await productToUpdate.save();
                    }
                }
            }
        }, 1 * 60 * 1000); // 1 minutes

        revalidatePath('/');

        return { success: true, message: 'Cart updated successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

export default addToCart;
