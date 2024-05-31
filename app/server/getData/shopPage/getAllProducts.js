import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getAllProducts = async () => {
    try {
        // Connect DB
        await connectDB();

        // Find all products
        const products = await Product.find()
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
            .lean();

        return JSON.stringify(products);
    } catch (error) {
        throw new Error(error);
    }
};

export default getAllProducts;
