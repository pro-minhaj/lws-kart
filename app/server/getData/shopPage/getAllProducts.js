import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

// Select Product
const selectProduct = {
    _id: 1,
    name: 1,
    image: 1,
    price: 1,
    discount_price: 1,
    reviewsNumber: 1,
    ratings: 1,
    sizes: 1,
    category: 1,
    availability: 1
};

const getAllProducts = async (searchParams) => {
    const { search, category } = searchParams;
    try {
        // Connect DB
        await connectDB();

        // Find all products
        const allProducts = await Product.find().select(selectProduct).sort({ name: 1 }).lean();
        // Product Returns
        let products = allProducts;

        // Search
        if (search) {
            products = products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Category
        if (category) {
            const categories = category
                .split(',')
                .map((cat) => cat.trim())
                .filter((cat) => cat !== '');
            if (categories.length > 0) {
                products = products.filter((product) => {
                    const result = categories.includes(product.category);
                    return result;
                });
            }
        }

        return JSON.stringify(products);
    } catch (error) {
        throw new Error(error);
    }
};

export default getAllProducts;
