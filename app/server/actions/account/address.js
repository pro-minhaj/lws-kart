'use server';
import connectDB from '@/lib/connectDB';
import Address from '@/models/Address';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const addressAction = async (addressInfo, formData) => {
    const session = await getServerSession();
    const user = session?.user;
    try {
        if (!user) throw new Error('User Not Authenticated');

        // All Data
        const addressData = {
            email: user?.email,
            address: addressInfo?.address || formData.get('address'),
            city: addressInfo?.city || formData.get('city'),
            state: addressInfo?.state || formData.get('state'),
            country: addressInfo?.country || formData.get('country'),
            zipCode: addressInfo?.zipCode || formData.get('zipCode')
        };

        // connect DB
        await connectDB();

        // Check if the user already exists
        const existingUser = await Address.findOne({ email: user?.email });
        if (existingUser) {
            await Address.updateOne(
                { email: user?.email },
                {
                    $set: {
                        address: addressData.address,
                        city: addressData.city,
                        state: addressData.state,
                        country: addressData.country,
                        zipCode: addressData.zipCode
                    }
                }
            );

            revalidatePath('/account');

            return {
                success: true,
                message: 'Address updated successfully'
            };
        }
        await Address.create(addressData);

        revalidatePath('/account');
        return {
            success: true,
            message: 'Address created successfully'
        };
    } catch (error) {
        throw new Error(error);
    }
};

export default addressAction;
