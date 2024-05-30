import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { FaHeart, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import LanguageSwitcher from '../LangSwitch/LangSwitch';
import { cookies } from 'next/headers';
import getUserData from '@/app/server/getData/getUserData';

const Header = async ({ lang }) => {
    // Language
    const { header } = await getDictionary(lang);
    const cookieStore = cookies();
    const initialLang = cookieStore.get('lang')?.value || 'en';
    // Get user data
    const userReq = await getUserData();
    const { wishlistCount, cartCount } = JSON.parse(userReq);

    // Header Items
    const headerItems = [
        {
            name: header.wishlist,
            link: "/wishlist",
            icon: <FaHeart />,
            count: wishlistCount
        },
        {
            name: header.cart,
            link: "/checkout",
            icon: <FaShoppingCart />,
            count: cartCount
        },
        {
            name: header.account,
            link: "/account",
            icon: <FaUser />,
            count: null
        },
    ]

    return (
        <header className="py-4 bg-white shadow-sm">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/">
                    <Image width={150} height={100} src={logo} alt="Logo" priority={true} className="w-32" />
                </Link>

                <div className="hidden w-full max-w-xl lg:block">
                    <div className='flex'>
                        <div className='flex items-center w-full px-3 py-0.5 border border-r-0 border-primary rounded-l-md'>
                            <span className="text-lg text-gray-400">
                                <IoSearch />
                            </span>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                className="w-full border-transparent !ring-transparent !border-none outline-none !focus:border-none focus:outline-none"
                                placeholder={`${header.search}...`}
                            />
                        </div>
                        <button
                            className="px-5 text-white transition-colors border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary"
                        >
                            {header.search}
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:gap-5">
                    {/* Header Items */}
                    {
                        headerItems.map((item, index) => <Link key={index} href={item.link} className="block">
                            <div className='flex items-center gap-1 text-center text-gray-700 transition hover:text-primary'>
                                <span className='text-xl'>
                                    {item.icon}
                                </span>
                                <span className="hidden text-xs sm:block">{item.name}</span>
                                {
                                    item.count && <span className="flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-primary">
                                        {item.count}
                                    </span>
                                }
                            </div>
                        </Link>)
                    }
                    <LanguageSwitcher currentLang={initialLang} />
                </div>
            </div>
        </header>
    );
};

export default Header;
