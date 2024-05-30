'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const getUserData = async () => {
    try {
        const data = await getServerSession();
        if (!data?.user) null;

        // Connect DB
        await connectDB();

        const userData = await User.findOne({ email: data?.user?.email })
            .select({ carts: 1, wishlists: 1 })
            .lean();

        const wishlistCount = userData?.wishlists?.length || '0';
        const cartCount = userData?.carts?.length || '0';
        return JSON.stringify({
            wishlistCount,
            cartCount
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default getUserData;
