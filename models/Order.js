import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    email: { type: String, required: true },
    products: [
        {
            _id: { type: mongoose.Types.ObjectId, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            size: { type: String, required: true },
            totalPrice: { type: Number, required: true }
        }
    ],
    subTotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true }
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
