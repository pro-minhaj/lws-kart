import CategoryLoading from './_components/CategoryLoading';

const CategorySectionLoading = () => {
    return (
        <div className='container py-10 md:py-16'>
            <h2 class='mb-6 text-2xl font-medium text-gray-800 uppercase animate-pulse'>
                <div class='h-6 bg-gray-200 rounded w-1/3'></div>
            </h2>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
                <CategoryLoading />
                <CategoryLoading />
                <CategoryLoading />
                <CategoryLoading />
                <CategoryLoading />
                <CategoryLoading />
            </div>
        </div>
    );
};

export default CategorySectionLoading;
