import ProductLoading from '@/app/components/Product/ProductLoading';

const TrendingProductLoading = () => {
    return (
        <div className='container pb-10 md:pb-16'>
            <div
                className='w-full animate-pulse'
                style={{ width: '1600px', height: '500px', backgroundColor: 'gray' }}
            ></div>
            <div className='pt-5 md:pt-8'>
                <h2 className='mb-6 text-2xl font-medium text-gray-800 uppercase animate-pulse'>
                    <div className='w-1/3 h-6 bg-gray-200 rounded'></div>
                </h2>
                <div className='grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                </div>
            </div>
        </div>
    );
};

export default TrendingProductLoading;
