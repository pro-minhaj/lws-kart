
const ProductLoading = () => {
    return (
        <div className='overflow-hidden bg-gray-200 rounded animate-pulse'>
            <div className='relative block h-72'></div>
            <div className='px-4 pt-4 pb-3'>
                <div className='mb-2 text-lg h-7 w-3/4 bg-gray-300 rounded'></div>
                <div className='flex items-center mb-1 space-x-2'>
                    <div className='h-6 w-10 bg-gray-300 rounded'></div>
                    <div className='h-4 w-10 bg-gray-300 rounded'></div>
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-1 text-sm text-yellow-400'>
                        <div className='h-4 w-4 bg-gray-300 rounded'></div>
                    </div>
                    <div className='w-10 h-4 ml-3 bg-gray-300 rounded'></div>
                </div>
            </div>
            <div className='h-10 bg-gray-300 rounded'></div>
        </div>
    );
};

export default ProductLoading;