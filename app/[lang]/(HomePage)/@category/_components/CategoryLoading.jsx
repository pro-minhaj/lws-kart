
const CategoryLoading = () => {
    return (
        <div className="relative overflow-hidden rounded-sm cursor-pointer group animate-pulse">
            <div style={{ width: '400px', height: '400px' }} className="w-auto h-auto bg-gray-200"></div>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-medium capitalize transition bg-black bg-opacity-40 group-hover:bg-opacity-60">
                <div className="w-full h-6 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};

export default CategoryLoading;