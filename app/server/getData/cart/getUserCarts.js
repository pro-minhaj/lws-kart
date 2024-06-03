import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const getUserCarts = async () => {
    const session = await getServerSession();
    const user = session.user;

    try {
        if (!user) throw new Error('User not authenticated');
        // Connect DB
        await connectDB();

        // Find all wishlist products
        const carts = await User.aggregate([
            { $match: { email: user?.email } },
            { $unwind: '$carts' },
            {
                $lookup: {
                    from: 'products',
                    localField: 'carts.productId',
                    foreignField: '_id',
                    as: 'carts.product'
                }
            },
            { $unwind: '$carts.product' },
            {
                $project: {
                    carts: {
                        _id: '$carts.product._id',
                        name: '$carts.product.name',
                        price: '$carts.product.price',
                        size: '$carts.size',
                        quantity: '$carts.quantity'
                    }
                }
            }
        ]);

        return JSON.stringify(carts);
    } catch (error) {
        throw new Error(error);
    }
};

export default getUserCarts;
