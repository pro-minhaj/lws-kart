// Import necessary modules
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

// Function to fetch all products based on search parameters
const getAllProducts = async (searchParams) => {
    const { search, category, min, max, size } = searchParams;
    try {
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
            query.category = { $in: decodeURI(categories) };
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
        // Handle errors
        throw new Error(error);
    }
};

// Export the function
export default getAllProducts;
