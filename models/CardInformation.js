import mongoose from 'mongoose';
const { Schema } = mongoose;

const userCardInformation = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    holderName: { type: String, required: true, trim: true },
    cardNumber: { type: Number, required: true },
    cvc: { type: Number, required: true }
});

export default mongoose.models.CardInformation ||
    mongoose.model('CardInformation', userCardInformation);
