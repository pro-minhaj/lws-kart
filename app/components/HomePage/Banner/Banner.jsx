import Link from 'next/link';

const Banner = () => {
    return (
        <div className="py-16 bg-center bg-no-repeat bg-cover sm:py-20 bannerBg md:py-36">
            <div className="container">
                <h1 className="mb-4 text-3xl font-medium text-gray-800 capitalize sm:text-4xl md:text-6xl">
                    best collection for <br /> home decoration
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                    accusantium perspiciatis, sapiente
                    magni eos dolorum ex quos dolores odio
                </p>
                <div className="mt-5 sm:mt-8 md:mt-12">
                    <Link className='px-5 py-3 font-medium text-white border rounded-md md:px-8 bg-primary border-primary hover:bg-transparent hover:text-primary' href="/shop">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
