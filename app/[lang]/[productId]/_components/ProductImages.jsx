"use client";
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const ProductImages = ({ images }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchParamsImage = searchParams.get('image');
    const imageIndex = searchParamsImage ? parseInt(searchParamsImage) - 1 : 0;
    const image = images[imageIndex];

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const buttons = useMemo(() => (
        images.map((img, index) => (
            <button
                onClick={() => router.push(pathname + '?' + createQueryString('image', index + 1))}
                className={`w-full h-20 border md:h-28 ${img === image ? "border-primary" : ""}`}
                key={index}
            >
                <Image
                    src={img}
                    alt={`Product-${index + 1}`}
                    width={200}
                    height={100}
                    className='object-cover w-full h-full overflow-hidden'
                />
            </button>
        ))
    ), [images, image, createQueryString, router, pathname]);

    return (
        <div>
            <Image
                src={image}
                alt='product'
                className='w-full object-cover h-[25rem] md:h-[31.25rem]'
                width={800}
                height={450}
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />

            <div className='grid items-center justify-center grid-cols-3 gap-4 mt-4 md:grid-cols-4'>
                {buttons}
            </div>
        </div>
    );
};

export default ProductImages;
