import { z } from 'zod';

const orderSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Full name is required.' })
        .max(100, { message: 'Full name must be less than 100 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    phone: z
        .number()
        .int({ message: 'Phone number must be an integer.' })
        .min(1000000000, { message: 'Phone number must be at least 10 digits.' })
        .max(9999999999, { message: 'Phone number must be at most 10 digits.' }),
    address: z
        .string()
        .min(1, { message: 'Address is required.' })
        .max(200, { message: 'Address must be less than 200 characters.' }),
    city: z
        .string()
        .min(1, { message: 'City is required.' })
        .max(100, { message: 'City must be less than 100 characters.' }),
    zipCode: z
        .number()
        .int({ message: 'Zip code must be an integer.' })
        .min(1000, { message: 'Zip code must be at least 5 digits.' })
        .max(99999, { message: 'Zip code must be at most 5 digits.' }),
    state: z
        .string()
        .min(1, { message: 'State is required.' })
        .max(100, { message: 'State must be less than 100 characters.' }),
    country: z
        .string()
        .min(1, { message: 'Country is required.' })
        .max(100, { message: 'Country must be less than 100 characters.' }),

    // Card Information
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

export default orderSchema;
