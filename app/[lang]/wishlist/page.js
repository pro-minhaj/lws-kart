import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import WishlistCard from '@/app/components/WishlistCard/WishlistCard';

const WishlistPage = () => {
    return (
        <div>
            {/* Page Hading */}
            <PageLeftHanding>Wishlist</PageLeftHanding>
            {/* Page Hading */}

            {/* All WishList */}
            <div className='container gap-6 pt-4 pb-16'>
                {/* wishlist */}
                <div className='max-w-6xl mx-auto space-y-4'>
                    <WishlistCard />
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;
