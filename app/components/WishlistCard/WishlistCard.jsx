import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import productImg1 from '@/assets/images/products/product1.jpg';

const WishlistCard = () => {
    return (
        <>
            <div className='flex items-center justify-between gap-6 p-4 border border-gray-200 rounded'>
                <div className='w-28'>
                    <Image
                        src={productImg1}
                        alt='Italian L shape'
                        width={110}
                        height={110}
                        className='w-full'
                    />
                </div>
                <div className='w-1/3'>
                    <h2 className='text-xl font-medium text-gray-800 uppercase'>
                        Italian L shape
                    </h2>
                    <p className='text-sm text-gray-500'>
                        Availability: <span className='text-green-600'>In Stock</span>
                    </p>
                </div>
                <div className='text-lg font-semibold text-primary'>$320.00</div>
                <button className='px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto'>
                    add to cart
                </button>
                <div className='text-gray-600 cursor-pointer hover:text-primary'>
                    <FaTrash />
                </div>
            </div>
        </>
    );
};

export default WishlistCard;