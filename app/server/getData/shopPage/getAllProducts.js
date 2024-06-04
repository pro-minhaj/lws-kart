import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';

// Define fields to select from Product document
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

/**
 * Fetches all products based on search parameters.
 * @param {Object} searchParams - The search parameters.
 * @returns {Promise<string>} - JSON string representing the products.
 */
const getAllProducts = async (searchParams) => {
    try {
        // Validate input parameters
        if (!searchParams || typeof searchParams !== 'object') {
            throw new Error('Invalid search parameters');
        }

        const { search, category, min, max, size } = searchParams;

        // Connect to the database
        await connectDB();

        // Build query criteria
        const query = {};

        // Search by product name
        if (search) {
            query.name = { $regex: new RegExp(search, 'i') };
        }

        // Filter by category
        if (category) {
            const categories = category
                .split(',')
                .map((cat) => cat.trim())
                .filter((cat) => cat !== '');

            query.category = { $in: categories };
        }

        // Filter by price range
        if (min && max) {
            query.price = { $gte: parseFloat(min), $lte: parseFloat(max) };
        }

        // Filter by size
        if (size) {
            query.sizes = size;
        }

        // Fetch products based on query
        const products = await Product.find(query).select(selectProduct).sort({ name: 1 }).lean();

        // Return products as JSON
        return JSON.stringify(products);
    } catch (error) {
        // Log error for debugging
        console.error('Error in getAllProducts:', error);
        throw new Error('An error occurred while fetching products');
    }
};

// Export the function
export default getAllProducts;
