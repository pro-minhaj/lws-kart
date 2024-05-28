"use client";
import addWishlist from "@/app/server/actions/wishlist";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { toast } from "sonner";

const ProductActions = ({ product_quantity, add_to_cart, add_to_wishlist, productId, alreadyWishlist }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchParamsQuantity = searchParams.get('quantity');
    const quantity = searchParamsQuantity ? parseInt(searchParamsQuantity) : 1;
    const isDisabled = quantity <= 1 ? true : false;

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    // Handle Wishlist
    const handleWishlist = async () => {
        try {
            const wishlist = await addWishlist(productId);
            if (wishlist?.success) {
                toast.success(wishlist?.message)
            }
            else {
                toast.error(wishlist?.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <div className='mt-4'>
                <h3 className='mb-1 text-sm text-gray-800 uppercase'>{product_quantity}</h3>
                <div className='flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max'>
                    <button disabled={isDisabled} onClick={() => router.push(pathname + '?' + createQueryString('quantity', quantity - 1))} className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                        -
                    </button>
                    <div className='flex items-center justify-center w-8 h-8 text-base'>
                        {quantity}
                    </div>
                    <button onClick={() => router.push(pathname + '?' + createQueryString('quantity', quantity + 1))} className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                        +
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-3 pt-5 pb-5 mt-3 border-b border-gray-200 md:mt-6 md:max-w-md md:grid-cols-2'>
                <button className='flex items-center justify-center w-full gap-2 py-2 font-medium text-white uppercase transition-colors border rounded bg-primary border-primary hover:bg-transparent hover:text-primary'>
                    <FaShoppingBag /> {add_to_cart}
                </button>
                <button
                    disabled={alreadyWishlist}
                    onClick={handleWishlist}
                    className='flex items-center justify-center w-full gap-2 py-2 font-medium text-gray-600 uppercase transition-colors border border-gray-300 rounded hover:text-primary disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:text-opacity-50 disabled:hover:text-gray-600/50'>
                    <FaHeart />  {alreadyWishlist ? "Already Wishlist" : add_to_wishlist}
                </button>
            </div>
        </>
    );
};

export default ProductActions;