import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getTrendingProducts = async () => {
    await connectDB();
    try {
        const trendingProducts = await Product.find()
            .sort({ _id: -1 })
            .select({
                _id: 1,
                name: 1,
                image: 1,
                price: 1,
                discount_price: 1,
                reviewsNumber: 1,
                ratings: 1,
                sizes: 1,
                availability: 1
            })
            .limit(8)
            .lean();
        return JSON.stringify(trendingProducts);
    } catch (error) {
        throw new Error(error);
    }
};

export default getTrendingProducts;
