import { z } from 'zod';

export const OrderSchema = z
    .object({
        email: z.string().email('Invalid email format').nonempty('Email is required'),
        cardInformation: z.object({
            name: z.string().nonempty('Card holder name is required'),
            no: z
                .string()
                .nonempty('Card number is required')
                .length(16, 'Card number must be 16 digits')
                .regex(/^\d+$/, 'Card number must contain only digits'),
            cvc: z
                .string()
                .nonempty('CVC is required')
                .length(3, 'CVC must be 3 digits')
                .regex(/^\d+$/, 'CVC must contain only digits')
        })
    })
    .catch((e) => {
        throw new Error(e.errors.map((error) => error.message).join('\n'));
    });
