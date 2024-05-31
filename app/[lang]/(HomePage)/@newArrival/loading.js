import ProductLoading from '@/app/components/Product/ProductLoading';

const NewArrivalLoading = () => {
    return (
        <div className='container pb-16'>
            <h2 className='mb-6 text-2xl font-medium text-gray-800 uppercase animate-pulse'>
                <div className='w-1/3 h-6 bg-gray-200 rounded'></div>
            </h2>
            <div className='grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
            </div>
        </div>
    );
};

export default NewArrivalLoading;
