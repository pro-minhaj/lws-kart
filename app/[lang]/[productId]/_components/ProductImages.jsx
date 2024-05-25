"use client";
import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ images }) => {
    const [image, setImage] = useState(images[0]);

    const handleMainImage = (index) => {
        if (index >= 0 && index < images.length) {
            setImage(images[index]);
        } else {
            console.error('Image index out of bounds');
        }
    }

    return (
        <div>
            <Image
                src={image}
                alt='product'
                className='w-full object-cover h-[31.25rem] md:h-[31.25rem]'
                width={800}
                height={450}
                quality={100}
                priority
            />

            <div className='grid items-center justify-center grid-cols-3 gap-4 mt-4 md:grid-cols-4'>
                {images.map((img, index) => (
                    <button
                        onClick={() => handleMainImage(index)}
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
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
