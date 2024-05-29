import addWishlist from '@/app/server/actions/wishlist';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const { productId, email } = await req.json();
    try {
        const result = await addWishlist(productId, email);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.error(error);
    }
};
