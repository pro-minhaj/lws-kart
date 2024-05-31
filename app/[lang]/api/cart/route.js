import addToCart from '@/app/server/actions/addtocart';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const data = await req.json();
    const { productId, quantity, size, email } = data;
    try {
        const result = await addToCart(productId, quantity, size, email);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.error(error);
    }
};
