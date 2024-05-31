'use server';
import connectDB from '@/lib/connectDB';
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

        revalidatePath('/');

        return { success: true, message: 'Cart updated successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

export default addToCart;
