
const WishlistLoading = () => {
    return (
        <div className='flex items-center justify-between gap-6 p-4 border border-gray-200 rounded animate-pulse'>
            <div className='h-24 bg-gray-200 rounded w-28'></div>
            <div className='w-1/3'>
                <div className='w-full h-4 mt-1 bg-gray-200 rounded'></div>
                <div className='w-2/3 h-4 mt-2 bg-gray-200 rounded'></div>
            </div>
            <div className='w-16 h-6 bg-gray-200 rounded'></div>
            <div className='h-6 px-6 py-2 bg-gray-200 rounded'></div>
            <div className='w-8 h-8 bg-gray-200 rounded'></div>
        </div>
    );
};

export default WishlistLoading;