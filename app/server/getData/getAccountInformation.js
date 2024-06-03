import connectDB from '@/lib/connectDB';
import Address from '@/models/Address';
import CardInformation from '@/models/CardInformation';
import UserProfile from '@/models/UserProfile';
import { getServerSession } from 'next-auth';

const getAccountInformation = async () => {
    const session = await getServerSession();
    if (!session) null;
    const { email } = session.user;

    try {
        // Connect DB
        await connectDB();
        // Get user data
        const [userProfile, address, cardInformation] = await Promise.all([
            UserProfile.findOne({ email }).lean(),
            Address.findOne({ email }).lean(),
            CardInformation.findOne({ email }).lean()
        ]);

        return JSON.stringify({
            userProfile,
            address,
            cardInformation
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default getAccountInformation;
