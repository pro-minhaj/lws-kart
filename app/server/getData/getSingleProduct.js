import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

const getSingleProduct = async (id) => {
    await connectDB();
    try {
        const product = await Product.findById(id).lean();
        if (!product) {
            return { error: 'Product not found' };
        }
        const relatedProducts = await Product.find({
            category: product?.category,
            _id: { $ne: id }
        })
            .select({
                _id: 1,
                name: 1,
                image: 1,
                price: 1,
                discount_price: 1,
                reviewsNumber: 1,
                ratings: 1
            })
            .limit(4)
            .lean();

        return JSON.stringify({ product, relatedProducts });
    } catch (error) {
        throw new Error(error);
    }
};

export default getSingleProduct;
