import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    image: String
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
