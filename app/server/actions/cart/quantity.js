'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const actionQuantity = async (action, productId) => {
    const session = await getServerSession();
    const user = session?.user;
    try {
        // Connect DB
        await connectDB();

        if (!user) throw new Error('User not found');

        const userData = await User.findOne({
            email: user?.email
        });

        if (!userData) throw new Error('User data not found');

        const cartItem = userData.carts.find(
            (product) => product.productId.toString() === productId
        );

        if (!cartItem) throw new Error('Product not found in cart');

        // Check Action Quantity
        if (action === 'plus') {
            cartItem.quantity += 1;
        } else if (action === 'minus') {
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                throw new Error('Quantity cannot be less than zero');
            }
        } else {
            throw new Error('Invalid action');
        }

        await userData.save();

        revalidatePath('/checkout');
    } catch (error) {
        throw new Error(error);
    }
};

export default actionQuantity;
