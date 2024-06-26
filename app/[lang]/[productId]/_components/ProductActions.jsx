"use client";
import AddToCart from "@/app/components/AddToCart/AddToCart";
import addWishlist from "@/app/server/actions/wishlist";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { toast } from "sonner";

const ProductActions = ({
    product_quantity,
    add_to_cart,
    add_to_wishlist,
    productId,
    alreadyWishlist,
    alreadyCart,
    availability,
    sizes
}) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchParamsQuantity = searchParams.get('quantity');
    const quantity = searchParamsQuantity ? parseInt(searchParamsQuantity) : 1;
    const isDisabled = useMemo(() => quantity <= 1, [quantity]);
    const productSize = searchParams.get("size") || sizes?.find(s => s);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    // Handle Wishlist
    const handleWishlist = useCallback(async () => {
        try {
            const wishlist = await addWishlist(productId);
            // Handle Error And Success
            if (wishlist?.error) {
                toast.error(wishlist?.message);
            } else if (wishlist?.success) {
                toast.success(wishlist?.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }, [productId]);

    const incrementQuantity = useCallback(() => {
        router.push(`${pathname}?${createQueryString('quantity', quantity + 1)}`);
    }, [router, pathname, createQueryString, quantity]);

    const decrementQuantity = useCallback(() => {
        router.push(`${pathname}?${createQueryString('quantity', quantity - 1)}`);
    }, [router, pathname, createQueryString, quantity]);

    // Product Size Change
    const handleChangeSize = useCallback((size) => {
        router.push(`${pathname}?${createQueryString("size", size)}`);
    }, [router, pathname, createQueryString])

    return (
        <>
            <div className="mt-4">
                <h3 className="mb-1 text-sm text-gray-800 uppercase">{product_quantity}</h3>
                <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
                    <button
                        disabled={isDisabled}
                        onClick={decrementQuantity}
                        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
                    >
                        -
                    </button>
                    <div className="flex items-center justify-center w-8 h-8 text-base">
                        {quantity}
                    </div>
                    <button
                        onClick={incrementQuantity}
                        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* sizes */}
            {
                sizes && <div className="flex items-center gap-3 mt-4">
                    <p className='space-x-2'>
                        <span className='font-semibold text-gray-800'>
                            Sizes:
                        </span>
                    </p>
                    <div className="flex items-center gap-1.5 text-gray-600 w-max">
                        {
                            sizes?.map((size, index) => (
                                <button
                                    onClick={() => handleChangeSize(size)}
                                    key={index}
                                    className={`py-0.5 px-1.5 border border-gray-300 ${productSize === size && " !border-red-500"}`}
                                >
                                    {size}
                                </button>
                            ))
                        }
                    </div>
                </div>
            }

            <div className="grid grid-cols-1 gap-3 pb-5 mt-3 border-b border-gray-200 md:mt-6 md:max-w-md md:grid-cols-2">
                <AddToCart availability={availability} productSize={productSize} productId={productId} alreadyCart={alreadyCart}>
                    <FaShoppingBag /> {add_to_cart}
                </AddToCart>
                <button
                    disabled={alreadyWishlist || alreadyCart}
                    onClick={handleWishlist}
                    className="flex items-center justify-center w-full gap-2 py-2 font-medium text-gray-600 uppercase transition-colors border border-gray-300 rounded hover:text-primary disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:text-opacity-50 disabled:hover:text-gray-600/50"
                >
                    <FaHeart /> {alreadyWishlist ? "Already Wishlist" : add_to_wishlist}
                </button>
            </div>
        </>
    );
};

export default ProductActions;
