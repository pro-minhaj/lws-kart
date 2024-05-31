import Image from 'next/image';
import WishlistDelete from './WishlistDelete';
import Link from 'next/link';
import AddToCart from '../AddToCart/AddToCart';
import isCarts from '@/app/server/getData/isCarts';

const WishlistCard = async ({ product, add_to_cart }) => {
    const { _id, name, image, price, availability } = product;
    const alreadyCart = await isCarts(_id);

    return (
        <>
            <div className='flex items-center justify-between gap-6 p-4 border border-gray-200 rounded'>
                <Link href={_id} className='block h-24 w-28'>
                    <Image
                        src={image[0]}
                        alt={name}
                        width={110}
                        height={110}
                        className='w-full h-full rounded'
                    />
                </Link>
                <div className='w-1/3'>
                    <h2 className='text-xl font-medium text-gray-800 uppercase'>
                        {name}
                    </h2>
                    <p className='text-sm text-gray-500'>
                        Availability: <span className='text-green-600'>{availability ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
                <div className='text-lg font-semibold text-primary'>${price}</div>
                <AddToCart
                    availability={availability}
                    alreadyCart={alreadyCart}
                    productId={_id}
                    className="!text-sm !w-auto !px-6 !py-2">
                    {add_to_cart}
                </AddToCart>
                <WishlistDelete id={_id} />
            </div>
        </>
    );
};

export default WishlistCard;