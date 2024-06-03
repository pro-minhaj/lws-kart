'use server';
import { CardInformationSchema } from '@/lib/ZodSchema/CardInformationSchema';
import connectDB from '@/lib/connectDB';
import CardInformation from '@/models/CardInformation';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const cardInformationAction = async (cardInfo, formData) => {
    const session = await getServerSession();
    const user = session?.user;

    // All Data
    const cardInformationData = {
        email: user?.email,
        holderName: cardInfo?.holderName || formData.get('name'),
        cardNumber: cardInfo?.cardNumber || formData.get('no'),
        cvc: cardInfo?.cvc || formData.get('cvc')
    };

    // Card Information Validation
    const validatedFields = CardInformationSchema.safeParse(cardInformationData);

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    try {
        if (!user) throw new Error('User Not Authenticated');

        // connect DB
        await connectDB();

        // Check if the user already exists
        const existingUser = await CardInformation.findOne({ email: user?.email });
        if (existingUser) {
            await CardInformation.updateOne(
                { email: user?.email },
                {
                    $set: {
                        name: validatedFields?.data?.holderName,
                        no: validatedFields?.data?.cardNumber,
                        cvc: validatedFields?.data?.cvc
                    }
                }
            );

            revalidatePath('/account');

            return {
                success: true,
                message: 'Card Information updated successfully'
            };
        }
        await CardInformation.create(validatedFields.data);

        revalidatePath('/account');
        return {
            success: true,
            message: 'Card Information created successfully'
        };
    } catch (error) {
        throw new Error(error);
    }
};

export default cardInformationAction;
