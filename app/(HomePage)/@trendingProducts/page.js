import Image from 'next/image';
import offerImg from '@/assets/images/offer.jpg';
import Link from 'next/link';

const TrendingProducts = () => {
    return (
        <div className='container pb-16'>
            <Link href='/shop'>
                <Image src={offerImg} alt='ads' width={1600} height={500} className='w-full' />
            </Link>
        </div>
    );
};

export default TrendingProducts;
