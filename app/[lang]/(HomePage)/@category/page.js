import getAllCategories from '@/app/server/getData/getCategories';
import Image from 'next/image';
import Link from 'next/link';

const CategorySection = async () => {
    const req = await getAllCategories();
    const allCategories = JSON.parse(req);

    return (
        <div className='container py-10 md:py-16'>
            <h2 className='mb-6 text-xl font-medium text-gray-800 uppercase md:text-2xl'>
                shop by category
            </h2>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
                {allCategories.map(({ _id, name, image }) => (
                    <Link href='#' key={_id}>
                        <div className='relative overflow-hidden rounded-sm cursor-pointer group'>
                            <Image
                                src={image}
                                alt={name}
                                width={400}
                                height={400}
                                className='w-auto h-auto'
                            />
                            <div className='absolute inset-0 flex items-center justify-center text-xl font-medium text-white capitalize transition bg-black bg-opacity-40 group-hover:bg-opacity-60'>
                                {name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
