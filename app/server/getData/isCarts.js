'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const isCarts = async (productId) => {
    const data = await getServerSession();

    try {
        await connectDB();
        // Find if the wishlist item already exists
        if (!data?.user) null;

        const userData = await User.findOne({
            email: data?.user?.email
        })
            .select({ carts: 1 })
            .lean();
        const cart = userData?.carts?.find((c) => c.productId.toString() === productId);
        if (cart) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export default isCarts;
