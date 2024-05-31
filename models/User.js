import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartItemSchema = new Schema(
    {
        productId: { type: mongoose.Types.ObjectId },
        size: { type: String, default: 'xs' },
        quantity: { type: Number }
    },
    { _id: false }
);

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    carts: [cartItemSchema],
    wishlists: [{ type: mongoose.Types.ObjectId }],
    orders: [{ type: mongoose.Types.ObjectId }]
});

export default mongoose.models.User || mongoose.model('User', userSchema);
