'use server';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const wishlistDelete = async (productId) => {
    try {
        const { user } = await getServerSession();
        if (!user) throw new Error('User not authenticated');

        const result = await User.updateOne(
            { email: user.email },
            { $pull: { wishlists: productId } }
        );

        if (result.modifiedCount === 0)
            throw new Error('Product not found in wishlist or user not found');

        revalidatePath('/');

        return { success: true, message: 'Wishlist item deleted successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export default wishlistDelete;
