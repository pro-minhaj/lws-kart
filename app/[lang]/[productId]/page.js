import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';
import Image from 'next/image';
import {
    FaStar,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaHeart,
    FaShoppingBag,
    FaChevronRight,
    FaSearch
} from 'react-icons/fa';

// import all Images
import product1 from '@/assets/images/products/product1.jpg';
import product2 from '@/assets/images/products/product2.jpg';
import product3 from '@/assets/images/products/product3.jpg';
import product4 from '@/assets/images/products/product4.jpg';
import product5 from '@/assets/images/products/product5.jpg';
import product6 from '@/assets/images/products/product6.jpg';
import { getDictionary } from '../dictionaries/dictionaries';

const ProductsDetailsPage = async ({ params: { lang, productId } }) => {
    const {
        product_details_page: {
            add_to_cart,
            add_to_wishlist,
            page_title,
            product_reviews,
            product_availability,
            product_brand,
            product_category,
            product_sku,
            product_quantity,
            product_product_details,
            product_related_products
        }
    } = await getDictionary(lang);

    return (
        <div>
            {/* breadcrumb */}
            <div className='container flex items-center gap-3 py-4'>
                <Link className='text-base text-primary' href='/'>
                    <FaHouse />
                </Link>
                <span className='text-sm text-gray-400'>
                    <FaChevronRight />
                </span>
                <p className='font-medium text-gray-600'>{page_title}</p>
            </div>
            {/* breadcrumb */}

            {/* product details */}
            <div className='container grid grid-cols-1 gap-6 lg:grid-cols-2'>
                <div>
                    <Image
                        src={product1}
                        alt='product'
                        className='w-full object-cover max-h-[31.25rem]'
                        width={600}
                        height={500}
                        quality={100}
                        priority
                    />
                    <div className='grid grid-cols-5 gap-4 mt-4'>
                        <Image
                            src={product2}
                            alt='product2'
                            width={100}
                            height={100}
                            className='w-full border cursor-pointer border-primary'
                        />
                        <Image
                            src={product3}
                            alt='product2'
                            width={100}
                            height={100}
                            className='w-full border cursor-pointer'
                        />
                        <Image
                            src={product4}
                            alt='product2'
                            width={100}
                            height={100}
                            className='w-full border cursor-pointer'
                        />
                        <Image
                            src={product5}
                            alt='product2'
                            width={100}
                            height={100}
                            className='w-full border cursor-pointer'
                        />
                        <Image
                            src={product6}
                            alt='product2'
                            width={100}
                            height={100}
                            className='w-full border cursor-pointer'
                        />
                    </div>
                </div>

                <div>
                    <h2 className='mb-2 text-2xl font-medium uppercase md:text-3xl'>
                        Italian L Shape Sofa
                    </h2>
                    <div className='flex items-center mb-4'>
                        <div className='flex gap-1 text-sm text-yellow-400'>
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <div className='ml-3 text-xs text-gray-500'>(150 {product_reviews})</div>
                    </div>
                    <div className='space-y-2'>
                        <p className='space-x-2 font-semibold text-gray-800'>
                            <span>{product_availability}: </span>
                            <span className='text-green-600'>In Stock</span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>{product_brand}: </span>
                            <span className='text-gray-600'>Apex</span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>
                                {product_category}:{' '}
                            </span>
                            <span className='text-gray-600'>Sofa</span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>{product_sku}: </span>
                            <span className='text-gray-600'>BE45VGRT</span>
                        </p>
                    </div>
                    <div className='flex items-baseline mt-4 mb-1 space-x-2 font-roboto'>
                        <p className='text-xl font-semibold text-primary'>$45.00</p>
                        <p className='text-base text-gray-400 line-through'>$55.00</p>
                    </div>

                    <p className='mt-4 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore
                        suscipit, velit consequuntur, voluptate doloremque iure necessitatibus
                        adipisci magnam porro.
                    </p>

                    <div className='mt-4'>
                        <h3 className='mb-1 text-sm text-gray-800 uppercase'>{product_quantity}</h3>
                        <div className='flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max'>
                            <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                -
                            </button>
                            <div className='flex items-center justify-center w-8 h-8 text-base'>
                                4
                            </div>
                            <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                +
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-3 pt-5 pb-5 mt-3 border-b border-gray-200 md:mt-6 md:max-w-md md:grid-cols-2'>
                        <button className='flex items-center justify-center w-full gap-2 py-2 font-medium text-white uppercase transition-colors border rounded bg-primary border-primary hover:bg-transparent hover:text-primary'>
                            <FaShoppingBag /> {add_to_cart}
                        </button>
                        <button className='flex items-center justify-center w-full gap-2 py-2 font-medium text-gray-600 uppercase transition-colors border border-gray-300 rounded hover:text-primary'>
                            <FaHeart /> {add_to_wishlist}
                        </button>
                    </div>

                    <div className='flex gap-3 mt-4'>
                        <Link
                            href='#'
                            className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href='#'
                            className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href='#'
                            className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className='container pt-5 pb-10 md:pt-8 md:pb-16'>
                <h3 className='pb-3 text-lg font-medium text-gray-800 border-b border-gray-200'>
                    {product_product_details}
                </h3>
                <div className='w-full pt-6 lg:w-3/5'>
                    <div className='text-gray-600'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                            necessitatibus deleniti natus dolore cum maiores suscipit optio itaque
                            voluptatibus veritatis tempora iste facilis non aut sapiente dolor
                            quisquam, ex ab.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae
                            accusantium voluptatem blanditiis sapiente voluptatum. Autem ab, dolorum
                            assumenda earum veniam eius illo fugiat possimus illum dolor totam,
                            ducimus excepturi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi
                            ut expedita! Iure molestiae labore cumque nobis quasi fuga, quibusdam
                            rem? Temporibus consectetur corrupti rerum veritatis numquam labore
                            amet.
                        </p>
                    </div>
                </div>
            </div>
            {/*description*/}

            {/* related product */}
            <div className='container pb-16'>
                <h2 className='mb-6 text-2xl font-medium text-gray-800 uppercase'>
                    {product_related_products}
                </h2>
                <div className='grid grid-cols-4 gap-6'>
                    {/* Product 1 */}
                    <div className='overflow-hidden bg-white rounded shadow group'>
                        <div className='relative'>
                            <Image
                                src={product1}
                                alt='product 1'
                                className='w-full'
                                width={300}
                                height={200}
                            />
                            <div className='absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100'>
                                <button
                                    className='flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800'
                                    title='view product'
                                >
                                    <FaSearch />
                                </button>
                                <button
                                    className='flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800'
                                    title='add to wishlist'
                                >
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                        <div className='px-4 pt-4 pb-3'>
                            <a href='#'>
                                <h4 className='mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary'>
                                    Guyer Chair
                                </h4>
                            </a>
                            <div className='flex items-baseline mb-1 space-x-2'>
                                <p className='text-xl font-semibold text-primary'>$45.00</p>
                                <p className='text-sm text-gray-400 line-through'>$55.90</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex gap-1 text-sm text-yellow-400'>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <div className='ml-3 text-xs text-gray-500'>(150)</div>
                            </div>
                        </div>
                        <button className='block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            {/* related product */}
        </div>
    );
};

export default ProductsDetailsPage;
