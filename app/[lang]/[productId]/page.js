import Link from 'next/link';
import { FaStar, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { getDictionary } from '../dictionaries/dictionaries';
import ProductImages from './_components/ProductImages';
import getSingleProduct from '@/app/server/getData/getSingleProduct';
import Product from '@/app/components/Product/Product';
import ProductActions from './_components/ProductActions';
import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import isWishlist from '@/app/server/getData/isWishlist';
import isCarts from '@/app/server/getData/isCarts';

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

    if (productId === 'favicon.ico') {
        return null;
    }

    const products = await getSingleProduct(productId);
    const { product, relatedProducts } = JSON.parse(products);

    const {
        _id,
        name,
        image,
        price,
        discount_price,
        reviewsNumber,
        ratings,
        availability,
        brand,
        category,
        details,
        description,
        sku
    } = product;

    // Check if the product is already wishlist
    const alreadyWishlist = await isWishlist(_id);
    const alreadyCart = await isCarts(_id);

    return (
        <>
            {/* Page Hading */}
            <PageLeftHanding>{page_title}</PageLeftHanding>
            {/* Page Hading */}

            {/* product details */}
            <div className='container grid grid-cols-1 gap-6 lg:grid-cols-2'>
                <ProductImages images={image} />
                <div>
                    <h2 className='mb-2 text-2xl font-medium uppercase md:text-3xl'>{name}</h2>
                    <div className='flex items-center mb-4'>
                        <div className='flex gap-1 text-sm text-yellow-400'>
                            {[...Array(Math.floor(ratings))].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <div className='ml-3 text-xs text-gray-500'>
                            ({reviewsNumber} {product_reviews})
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='space-x-2 font-semibold text-gray-800'>
                            <span>{product_availability}: </span>
                            <span className='text-green-600'>
                                {availability ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>{product_brand}: </span>
                            <span className='text-gray-600'>{brand}</span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>
                                {product_category}:{' '}
                            </span>
                            <span className='text-gray-600'>{category}</span>
                        </p>
                        <p className='space-x-2'>
                            <span className='font-semibold text-gray-800'>{product_sku}: </span>
                            <span className='text-gray-600'>{sku}</span>
                        </p>
                    </div>
                    <div className='flex items-baseline mt-4 mb-1 space-x-2 font-roboto'>
                        <p className='text-xl font-semibold text-primary'>${price}</p>
                        <p className='text-base text-gray-400 line-through'>${discount_price}</p>
                    </div>
                    <p className='mt-4 text-gray-600'>{description}</p>
                    {/* Product Actions */}
                    <ProductActions
                        alreadyWishlist={alreadyWishlist}
                        productId={_id}
                        alreadyCart={alreadyCart}
                        product_quantity={product_quantity}
                        add_to_cart={add_to_cart}
                        add_to_wishlist={add_to_wishlist}
                    />
                    {/* Product Actions */}

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
                <div className='w-full lg:w-3/5'>
                    <div className='flex flex-col gap-1 mt-4 text-gray-600'>
                        {Object.entries(details).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                                {value}
                            </li>
                        ))}
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
                    {relatedProducts.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
            {/* related product */}
        </>
    );
};

export default ProductsDetailsPage;
