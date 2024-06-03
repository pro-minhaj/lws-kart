'use server';
import connectDB from '@/lib/connectDB';
import UserProfile from '@/models/UserProfile';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const profileAction = async (formData) => {
    const session = await getServerSession();
    const user = session?.user;
    try {
        if (!user) throw new Error('User Not Authenticated');

        // All Data
        const profileData = {
            email: user?.email,
            name: formData.get('name'),
            phone: formData.get('phone')
        };

        // connect DB
        await connectDB();

        // Check if the user already exists
        const existingUser = await UserProfile.findOne({ email: user?.email });
        if (existingUser) {
            await UserProfile.updateOne(
                { email: user?.email },
                {
                    $set: {
                        name: profileData.name,
                        phone: profileData.phone
                    }
                }
            );

            revalidatePath('/account');

            return {
                success: true,
                message: 'Profile updated successfully'
            };
        }
        await UserProfile.create(profileData);

        revalidatePath('/account');
        return {
            success: true,
            message: 'Profile created successfully'
        };
    } catch (error) {
        throw new Error(error);
    }
};

export default profileAction;
