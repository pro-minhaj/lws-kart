import mongoose from 'mongoose';
const { Schema } = mongoose;

const userProfile = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true }
});

export default mongoose.models.UserProfile || mongoose.model('UserProfile', userProfile);
