import ProductLoading from '@/app/components/Product/ProductLoading';

const ShopPageLoading = () => {
    return (
        <>
            <div className='container flex items-center gap-3 py-4 animate-pulse'>
                <div className='h-6 w-6 bg-gray-200 rounded-full'></div>
                <div className='h-4 w-4 bg-gray-200 rounded-full'></div>
                <div className='h-4 bg-gray-200 rounded w-40'></div>
            </div>

            <div className='container grid items-start grid-cols-1 gap-6 pb-8 lg:pt-4 md:pb-16 lg:grid-cols-4'>
                {/* Left Menu Loading */}
                <div>
                    <div className='flex justify-end animate-pulse'>
                        <div className='block lg:hidden'>
                            <div className='flex items-center w-20 h-6 gap-1 bg-gray-200 rounded'></div>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <div className='space-y-5 divide-y divide-gray-200 animate-pulse'>
                            <div>
                                <div className='w-1/2 h-6 mb-4 bg-gray-200 rounded'></div>
                                <div className='space-y-2'>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                                        <div className='w-full h-4 ml-3 bg-gray-200 rounded'></div>
                                        <div className='w-10 h-4 ml-auto bg-gray-200 rounded'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-4 animate-pulse'>
                            <div className='w-1/3 h-6 mb-4 bg-gray-200 rounded'></div>
                            <div className='flex items-center mt-4'>
                                <div className='w-full h-8 bg-gray-200 rounded'></div>
                                <span className='h-4 mx-3 bg-gray-200'></span>
                                <div className='w-full h-8 bg-gray-200 rounded'></div>
                            </div>
                        </div>

                        <div className='pt-4 animate-pulse'>
                            <div className='w-1/3 h-6 mb-2 bg-gray-200 rounded'></div>
                            <div className='flex items-center gap-2'>
                                <div className='size-selector'>
                                    <div className='w-6 h-6 bg-gray-200 rounded'></div>
                                </div>
                                <div className='size-selector'>
                                    <div className='w-6 h-6 bg-gray-200 rounded'></div>
                                </div>
                                <div className='size-selector'>
                                    <div className='w-6 h-6 bg-gray-200 rounded'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Loading */}
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-3'>
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                </div>
            </div>
        </>
    );
};

export default ShopPageLoading;
