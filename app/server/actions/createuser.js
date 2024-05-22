'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { UserSchema } from '@/lib/ZodSchema/zUserSchema';
import connectDB from '@/lib/connectDB';
import User from '@/models/User';

export const createNewUser = async (formData) => {
    // Validate form fields
    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirm')
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    // Connect Db to MongoDB
    await connectDB();

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: formData.get('email') });
        if (existingUser) {
            return { error: 'User already exists' };
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(formData.get('password'), 10);

        // Add New User
        const newUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: hashedPassword
        };

        await User.create(newUser);
    } catch (error) {
        return { error: error.message };
    }

    redirect('/login');
};
