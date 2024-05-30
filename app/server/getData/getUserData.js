'use server';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const getUserData = async () => {
    const data = await getServerSession();
    if (!data?.user) null;

    const userData = await User.findOne({ email: data?.user.email })
        .select({ carts: 1, wishlists: 1 })
        .lean();

    const wishlistCount = userData?.wishlists?.length || '0';
    const cartCount = userData?.carts?.length || '0';
    return JSON.stringify({
        wishlistCount,
        cartCount
    });
};

export default getUserData;
