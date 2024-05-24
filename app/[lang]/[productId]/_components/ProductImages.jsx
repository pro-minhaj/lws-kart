// import all Images
import product1 from '@/assets/images/products/product1.jpg';
import product2 from '@/assets/images/products/product2.jpg';
import product3 from '@/assets/images/products/product3.jpg';
import product4 from '@/assets/images/products/product4.jpg';
import product5 from '@/assets/images/products/product5.jpg';
import product6 from '@/assets/images/products/product6.jpg';
import Image from 'next/image';

const ProductImages = () => {
    return (
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
    );
};

export default ProductImages;