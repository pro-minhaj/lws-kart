'use server';
import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const deleteCart = async (productId) => {
    const session = await getServerSession();
    const user = session.user;
    try {
        if (!user) throw new Error('User not found');
        // Connect DB
        await connectDB();
        const userData = await User.findOne({ email: user.email }).select({ carts: 1 });

        if (!userData) throw new Error('User data not found');

        // Filter out the product from the cart
        userData.carts = userData.carts.filter((c) => c.productId.toString() !== productId);

        // Save the updated user data
        await userData.save();

        const productToUpdate = await Product.findById(productId);
        if (productToUpdate) {
            productToUpdate.availability = true;
            await productToUpdate.save();
        }

        revalidatePath('/');

        return {
            success: true,
            message: 'Product removed from cart'
        };
    } catch (error) {
        throw new Error(error);
    }
};

export default deleteCart;
