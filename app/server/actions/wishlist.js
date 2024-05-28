'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import toObjectId from '../utils/toObjectId';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const addWishlist = async (productId) => {
    const data = await getServerSession();

    if (!data?.user) {
        redirect('/login?wishlist=true&productId=' + productId);
    }

    try {
        // Connect to the database
        await connectDB();

        const userData = await User.findOne({ email: data?.user?.email });
        if (!userData) {
            return { success: false, message: 'User not found' };
        }
        const productObjectId = toObjectId(productId);
        userData.wishlists.push(productObjectId);
        userData.save();
    } catch (error) {
        throw new Error(error);
    }

    revalidatePath('/');

    return { success: true, message: 'Wishlist added successfully' };
};

export default addWishlist;
