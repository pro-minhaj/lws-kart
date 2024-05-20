import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getNewArrival = async () => {
    await connectDB();
    try {
        const products = await Product.find().limit(4).lean();
        return JSON.stringify(products);
    } catch (error) {
        throw new Error(error);
    }
};

export default getNewArrival;
