import connectDB from '@/lib/connectDB';
import Order from '@/models/Order';
import { getServerSession } from 'next-auth';

const getOrderSummary = async () => {
    const session = await getServerSession();
    const user = session?.user;
    try {
        if (!user) throw new Error('User not authenticated');
        await connectDB();
        const products = await Order.find({ email: user.email })
            .select({
                _id: 1,
                total: 1,
                products: 1,
                pdfPath: 1,
                createdAt: 1
            })
            .sort({ createdAt: -1 })
            .lean();
        return JSON.stringify(products);
    } catch (error) {
        throw new Error(error);
    }
};

export default getOrderSummary;
