import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    image: Array,
    price: Number,
    discount_price: Number,
    reviewsNumber: Number,
    ratings: Number,
    availability: Boolean,
    brand: String,
    category: String,
    details: {
        material: String,
        dimensions: String,
        weight: String
    },
    description: String,
    sizes: Array,
    colors: Array,
    sku: Number,
    soldCounts: Number
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
