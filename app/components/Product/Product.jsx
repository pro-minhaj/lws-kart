import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Product = ({ product }) => {
    const { _id, name, image, price, discount_price, reviewsNumber, ratings } = product;
    const rating = new Array(Math.floor(ratings)).fill(0);

    return (
        <div className='overflow-hidden bg-white rounded shadow group'>
            <Link href={_id} className='relative block'>
                <Image
                    src={image[0]}
                    className='object-cover w-full h-full min-h-72 max-h-72'
                    width={600}
                    height={600}
                    quality={100}
                    alt={name}
                />
                <div className='absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100'>
                    <span
                        className='flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800'
                        title='view product'
                    >
                        <FaMagnifyingGlass />
                    </span>
                    <span
                        className='flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800'
                        title='add to wishlist'
                    >
                        <FaHeart />
                    </span>
                </div>
            </Link>
            <div className='px-4 pt-4 pb-3'>
                <h4 className='mb-2 overflow-hidden text-xl font-medium text-gray-800 uppercase transition h-7 hover:text-primary'>
                    {name}
                </h4>
                <div className='flex items-baseline mb-1 space-x-2'>
                    <p className='text-xl font-semibold text-primary'>${price}</p>
                    <p className='text-sm text-gray-400 line-through'>${discount_price}</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-1 text-sm text-yellow-400'>
                        {
                            rating.map((_item, index) => (
                                <FaStar key={index} />
                            ))
                        }
                    </div>
                    <div className='ml-3 text-xs text-gray-500'>({reviewsNumber})</div>
                </div>
            </div>
            <button className='block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary'>
                Add to cart
            </button>
        </div>
    );
};

export default Product;