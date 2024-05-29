import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import WishlistCard from '@/app/components/WishlistCard/WishlistCard';
import { getDictionary } from '../dictionaries/dictionaries';
import getAllWishlistProduct from '@/app/server/getData/getAllWishlistProduct';
import TrendingProducts from '../(HomePage)/@trendingProducts/page';

const WishlistPage = async ({ params: { lang } }) => {
    const {
        wishlist_page: { page_title, add_to_cart }
    } = await getDictionary(lang);

    const wishListReq = await getAllWishlistProduct();
    const wishListProducts = JSON.parse(wishListReq);

    return (
        <div>
            {/* Page Hading */}
            <PageLeftHanding>{page_title}</PageLeftHanding>
            {/* Page Hading */}

            {/* All WishList */}
            <div className='container gap-6 pt-4 pb-16'>
                {/* wishlist */}
                <div className='max-w-6xl mx-auto space-y-4'>
                    {wishListProducts?.map(({ product }) => (
                        <WishlistCard
                            key={product._id}
                            product={product}
                            add_to_cart={add_to_cart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;
