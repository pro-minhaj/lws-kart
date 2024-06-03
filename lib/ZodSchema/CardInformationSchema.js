import { z } from 'zod';

export const CardInformationSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    holderName: z.string().nonempty('Card holder name is required'),
    cardNumber: z
        .string()
        .nonempty('Card number is required')
        .length(16, 'Card number must be 16 digits')
        .max(20, { message: 'Card number must be at least 20 digits' })
        .regex(/^\d+$/, 'Card number must contain only digits'),
    cvc: z
        .string()
        .nonempty('CVC is required')
        .length(3, 'CVC must be 3 digits')
        .regex(/^\d+$/, 'CVC must contain only digits')
});
