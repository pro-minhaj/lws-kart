import connectDB from '@/lib/connectDB';
import Category from '@/models/Category';

const getAllCategories = async () => {
    await connectDB();
    try {
        const categories = await Category.find().lean();
        return JSON.stringify(categories);
    } catch (error) {
        throw new Error(error);
    }
};

export default getAllCategories;
