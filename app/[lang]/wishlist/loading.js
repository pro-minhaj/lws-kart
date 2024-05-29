import WishlistLoading from './_component/wishlistLoading';

const WishlistLoadingPage = () => {
    return (
        <div className='container gap-6 pt-4 pb-16'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <WishlistLoading />
                <WishlistLoading />
                <WishlistLoading />
                <WishlistLoading />
            </div>
        </div>
    );
};

export default WishlistLoadingPage;
