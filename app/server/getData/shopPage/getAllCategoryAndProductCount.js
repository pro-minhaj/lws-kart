import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getAllCategory = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Aggregation pipeline
        const categoryAndProductCount = await Product.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category',
                    foreignField: 'name',
                    as: 'category'
                }
            },
            { $unwind: '$category' },
            {
                $group: {
                    _id: '$category._id',
                    name: { $first: '$category.name' },
                    count: { $sum: 1 }
                }
            },
            { $sort: { name: 1 } }
        ]);

        return JSON.stringify(categoryAndProductCount);
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching categories and product counts');
    }
};

export default getAllCategory;
