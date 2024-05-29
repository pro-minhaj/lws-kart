import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

const WishlistCard = ({ product, add_to_cart }) => {
    const { _id, name, image, price, availability } = product;

    return (
        <>
            <div className='flex items-center justify-between gap-6 p-4 border border-gray-200 rounded'>
                <div className='h-24 w-28'>
                    <Image
                        src={image[0]}
                        alt={name}
                        width={110}
                        height={110}
                        className='w-full h-full rounded'
                    />
                </div>
                <div className='w-1/3'>
                    <h2 className='text-xl font-medium text-gray-800 uppercase'>
                        {name}
                    </h2>
                    <p className='text-sm text-gray-500'>
                        Availability: <span className='text-green-600'>{availability ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
                <div className='text-lg font-semibold text-primary'>${price}</div>
                <button className='px-6 py-2 text-sm font-medium text-center text-white uppercase transition-colors border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto'>
                    {add_to_cart}
                </button>
                <div className='text-gray-600 cursor-pointer hover:text-primary'>
                    <FaTrash />
                </div>
            </div>
        </>
    );
};

export default WishlistCard;