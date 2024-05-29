'use server';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';
import { getServerSession } from 'next-auth';

const getAllWishlistProduct = async () => {
    const session = await getServerSession();
    const user = session.user;

    try {
        // Connect DB
        await connectDB();

        // Find all wishlist products
        const wishlistProducts = await User.aggregate([
            { $match: { email: user.email } },
            { $unwind: '$wishlists' },
            {
                $lookup: {
                    from: 'products',
                    localField: 'wishlists',
                    foreignField: '_id',
                    as: 'product'
                }
            },
            { $unwind: '$product' },
            {
                $project: {
                    _id: 0,
                    product: {
                        _id: '$product._id',
                        name: '$product.name',
                        image: '$product.image',
                        price: '$product.price',
                        availability: '$product.availability'
                    }
                }
            }
        ]);

        return JSON.stringify(wishlistProducts);
    } catch (error) {
        throw new Error(error);
    }
};

export default getAllWishlistProduct;
