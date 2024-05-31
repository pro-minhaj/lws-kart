const LoginPageLoading = () => {
    return (
        <div className='py-16 contain animate-pulse'>
            <div className='max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7'>
                <div className='w-1/2 h-6 mx-auto bg-gray-200 rounded'></div>
                <div className='w-3/4 h-4 mx-auto my-6 bg-gray-200 rounded'></div>
                <form className='space-y-6'>
                    <div className='h-10 bg-gray-200 rounded'></div>
                    <div className='h-10 bg-gray-200 rounded'></div>
                    <div className='flex items-center justify-between mt-6'>
                        <div className='w-1/4 h-6 bg-gray-200'></div>
                        <div className='w-1/3 h-6 bg-gray-200'></div>
                    </div>
                    <div className='mt-4'>
                        <div className='h-12 bg-gray-200 rounded'></div>
                    </div>
                </form>
                <div className='relative flex justify-center mt-6'>
                    <div className='relative w-1/4 h-6 mx-auto mt-6 bg-gray-200 rounded'></div>
                </div>
                <div className='w-1/3 h-10 mx-auto my-6 bg-gray-200 rounded'></div>
                <div className='w-3/4 h-4 mx-auto mt-4 bg-gray-200 rounded'></div>
            </div>
        </div>
    );
};

export default LoginPageLoading;
