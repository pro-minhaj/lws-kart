import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getAllProducts = async () => {
    await connectDB();
    try {
        const products = await Product.find().lean();
        return JSON.stringify(products);
    } catch (error) {
        throw new Error(error);
    }
};

export default getAllProducts;
