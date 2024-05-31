
const ProductLoading = () => {
    return (
        <div class='overflow-hidden bg-gray-200 rounded animate-pulse'>
            <div class='relative block h-72'></div>
            <div class='px-4 pt-4 pb-3'>
                <div class='mb-2 text-lg h-7 w-3/4 bg-gray-300 rounded'></div>
                <div class='flex items-center mb-1 space-x-2'>
                    <div class='h-6 w-10 bg-gray-300 rounded'></div>
                    <div class='h-4 w-10 bg-gray-300 rounded'></div>
                </div>
                <div class='flex items-center'>
                    <div class='flex gap-1 text-sm text-yellow-400'>
                        <div class='h-4 w-4 bg-gray-300 rounded'></div>
                    </div>
                    <div class='w-10 h-4 ml-3 bg-gray-300 rounded'></div>
                </div>
            </div>
            <div class='h-10 bg-gray-300 rounded'></div>
        </div>
    );
};

export default ProductLoading;