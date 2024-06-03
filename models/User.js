import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartItemSchema = new Schema(
    {
        productId: { type: mongoose.Types.ObjectId, ref: 'Product' },
        size: { type: String, required: true, default: 'xs' },
        quantity: { type: Number, required: true }
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

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
