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
    }

    try {
        await connectDB();

        const email = userEmail || session.user.email;
        const parsedQuantity = parseInt(quantity, 10);

        const [userData, product] = await Promise.all([
            User.findOne({ email }),
            Product.findById(productId)
        ]);

        if (!userData) {
            throw new Error('User not found');
        }

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

        // Set a timestamp for when the product should be automatically removed from the cart
        const expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() + 5); // Set expiry to 5 minutes from now

        // Update user document with cart item and expiry
        await User.findOneAndUpdate(
            { email },
            {
                $push: {
                    carts: {
                        productId,
                        size: productSize,
                        quantity: parsedQuantity,
                        expiry // Add expiry field to the cart item
                    }
                },
                $pull: { wishlists: productId }
            },
            { new: true }
        );

        revalidatePath('/');

        return { success: true, message: 'Cart updated successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export default addToCart;
