import mongoose from 'mongoose';
const { Schema } = mongoose;

const userAddress = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    zipCode: { type: Number, required: true, trim: true }
});

export default mongoose.models.Address || mongoose.model('Address', userAddress);
