import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import Link from 'next/link';

const Banner = async ({ lang }) => {
    const { home_page: { banner_section } } = await getDictionary(lang);

    return (
        <div className="py-16 bg-center bg-no-repeat bg-cover sm:py-20 bannerBg md:py-36">
            <div className="container">
                <h1 className="mb-4 text-3xl font-medium text-gray-800 capitalize sm:text-4xl md:text-6xl">
                    {banner_section.title} <br /> {banner_section.sub_title}
                </h1>
                <p>{banner_section.description} <br /> {banner_section.sub_description}
                </p>
                <div className="mt-5 sm:mt-8 md:mt-12">
                    <Link className='px-5 py-3 font-medium text-white border rounded-md md:px-8 bg-primary border-primary hover:bg-transparent hover:text-primary' href="/shop">
                        {banner_section.shop_now}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
