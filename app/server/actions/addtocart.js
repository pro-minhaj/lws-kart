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
    }

    try {
        await connectDB();

        const email = userEmail || session.user.email;
        const parsedQuantity = parseInt(quantity);

        //if the product exists, otherwise add a new item
        const userData = await User.findOne({ email }).lean();
        if (!userData) {
            throw new Error('User not found');
        }
        const productExists = userData.carts.find(
            (cart) => cart.productId.toString() === productId
        );

        if (productExists) {
            throw new Error('Product already exists in the cart');
        }

        // Update the ProductId quantity
        await User.updateOne(
            { email },
            {
                $push: {
                    carts: { productId: productId, size: productSize, quantity: parsedQuantity }
                }
            }
        );

        revalidatePath('/');
        return { success: true, message: 'Cart updated successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

export default addToCart;
