'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const isWishlist = async (productId) => {
    const data = await getServerSession();

    try {
        await connectDB();
        // Find if the wishlist item already exists
        if (!data?.user) null;

        const userData = await User.findOne({
            email: data?.user?.email
        })
            .select({ wishlists: 1 })
            .lean();
        const wishlist = userData?.wishlists?.find((w) => w.toString() === productId);
        if (wishlist) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export default isWishlist;
