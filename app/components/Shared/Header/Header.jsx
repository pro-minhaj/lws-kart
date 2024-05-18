import Link from 'next/link';
import Image from 'next/image';
// import Image 
import logo from '@/assets/images/logo.svg';
import { FaHeart, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    // Header Items
    const headerItems = [
        {
            name: "Wishlist",
            link: "/wishlist",
            icon: <FaHeart />,
            count: 8
        },
        {
            name: "Cart",
            link: "/cart",
            icon: <FaShoppingCart />,
            count: 2
        },
        {
            name: "Account",
            link: "/account",
            icon: <FaUser />,
            count: null
        },
    ]
    return (
        <header className="py-4 bg-white shadow-sm">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/">
                    <Image width={150} height={100} src={logo} alt="Logo" priority className="w-32" />
                </Link>

                <div className="relative flex w-full max-w-xl">
                    <span className="absolute text-lg text-gray-400 left-4 top-3">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="hidden w-full px-3 py-3 border border-r-0 border-primary rounded-l-md focus:outline-none md:flex"
                        placeholder="Search..."
                    />
                    <button
                        className="items-center hidden px-8 text-white transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary md:flex"
                    >
                        Search
                    </button>
                </div>

                <div className="flex items-center gap-5">
                    {/* Header Items */}
                    {
                        headerItems.map((item, index) => <Link key={index} href={`/${item.link}`} className="block">
                            <div className='flex items-center gap-1 text-center text-gray-700 transition hover:text-primary'>
                                <span className='text-xl'>
                                    {item.icon}
                                </span>
                                <span className="text-xs leading-3">{item.name}</span>
                                {
                                    item.count && <span className="flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-primary">
                                        {item.count}
                                    </span>
                                }
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
