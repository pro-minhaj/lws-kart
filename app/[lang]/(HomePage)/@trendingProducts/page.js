import Image from 'next/image';
import offerImg from '@/assets/images/offer.jpg';
import Link from 'next/link';
import getTrendingProducts from '@/app/server/getData/getTrendingProducts';
import Product from '@/app/components/Product/Product';
import { getDictionary } from '../../dictionaries/dictionaries';

const TrendingProducts = async ({ params: { lang } }) => {
    const req = await getTrendingProducts();
    const trendingProducts = JSON.parse(req);
    // Language
    const {
        home_page: { trending_products_section }
    } = await getDictionary(lang);

    return (
        <div className='container pb-10 md:pb-16'>
            <Link href='/shop'>
                <Image src={offerImg} alt='ads' width={1600} height={500} className='w-full' />
            </Link>
            {/* Trending Products */}
            <div className='pt-5 md:pt-8'>
                <h2 className='mb-6 text-2xl font-medium text-gray-800 uppercase'>
                    {trending_products_section.trending_products}
                </h2>
                <div className='grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {trendingProducts.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
