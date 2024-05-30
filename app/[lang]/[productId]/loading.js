const ProductDetailsPageLoading = () => {
    return (
        <>
            <div className='container'>
                <div className='flex items-center gap-3 py-4 animate-pulse'>
                    <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
                    <div className='w-4 h-4 bg-gray-200 rounded-full'></div>
                    <div className='w-20 h-4 bg-gray-200 rounded'></div>
                </div>
                <div className='grid grid-cols-2 gap-4 md:gap-6'>
                    <div className='animate-pulse'>
                        <div className='w-full h-[25rem] md:h-[31.25rem] bg-gray-200 rounded'></div>
                        <div className='grid items-center justify-center grid-cols-3 gap-4 mt-4 md:grid-cols-4'>
                            <div className='w-full h-20 bg-gray-200 rounded md:h-28'></div>
                            <div className='w-full h-20 bg-gray-200 rounded md:h-28'></div>
                            <div className='w-full h-20 bg-gray-200 rounded md:h-28'></div>
                        </div>
                    </div>

                    <div className='animate-pulse'>
                        <div className='w-1/2 h-8 bg-gray-200 rounded'></div>
                        <div className='flex items-center my-4'>
                            <div className='flex gap-1 text-sm'>
                                <div className='w-4 h-4 bg-gray-200 rounded'></div>
                                <div className='w-4 h-4 bg-gray-200 rounded'></div>
                                <div className='w-4 h-4 bg-gray-200 rounded'></div>
                                <div className='w-4 h-4 bg-gray-200 rounded'></div>
                            </div>
                            <div className='w-1/3 h-4 ml-3 bg-gray-200 rounded'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='space-x-2'>
                                <div className='w-1/3 h-4 bg-gray-200 rounded'></div>
                            </div>
                            <div className='space-x-2'>
                                <div className='w-1/3 h-4 bg-gray-200 rounded'></div>
                            </div>
                            <div className='space-x-2'>
                                <div className='w-1/4 h-4 bg-gray-200 rounded'></div>
                            </div>
                            <div className='space-x-2'>
                                <div className='w-1/5 h-4 bg-gray-200 rounded'></div>
                            </div>
                        </div>
                        <div className='flex items-baseline mt-4 mb-2 space-x-2'>
                            <div className='w-1/4 h-6 bg-gray-200 rounded'></div>
                            <div className='w-1/4 h-5 bg-gray-200 rounded'></div>
                        </div>
                        <div className='w-full h-4 mt-4 bg-gray-200 rounded'></div>
                        <div className='mt-4'>
                            <div className='flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max'>
                                <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                    <div className='w-8 h-8 bg-gray-200 rounded'></div>
                                </button>
                                <div className='flex items-center justify-center w-8 h-8 text-base'>
                                    <div className='w-8 h-8 bg-gray-200 rounded'></div>
                                </div>
                                <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                    <div className='w-8 h-8 bg-gray-200 rounded'></div>
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <div className='w-1/3 h-8 bg-gray-200 rounded'></div>
                            <div className='w-1/3 h-8 bg-gray-200 rounded'></div>
                        </div>
                        <div className='flex items-center gap-3 mt-4 text-gray-600 w-max'>
                            <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
                            </button>
                            <div className='flex items-center justify-center w-8 h-8 text-base'>
                                <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
                            </div>
                            <button className='flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none'>
                                <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPageLoading;
