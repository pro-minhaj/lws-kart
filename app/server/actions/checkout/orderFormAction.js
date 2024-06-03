'use server';

import orderSchema from '@/lib/ZodSchema/OrderSchema';

const orderFormAction = async (formData) => {
    // Order Form Data
    const orderFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: parseInt(formData.get('phone')),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        zipCode: parseInt(formData.get('zipCode')),
        country: formData.get('country')
    };

    // Card Information Validation
    const validatedFields = orderSchema.safeParse(orderFormData);

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    console.log(validatedFields);
    try {
    } catch (error) {
        throw new Error(error);
    }
};

export default orderFormAction;
