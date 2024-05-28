import mongoose from 'mongoose';

const toObjectId = (id) => {
    try {
        return new mongoose.Types.ObjectId(id);
    } catch (error) {
        return null;
    }
};

export default toObjectId;
