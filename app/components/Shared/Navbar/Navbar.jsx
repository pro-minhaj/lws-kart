import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

// All Image Import
import sofa from "@/assets/images/icons/sofa.svg";
import terrace from "@/assets/images/icons/terrace.svg";
import bed from "@/assets/images/icons/bed.svg";
import office from "@/assets/images/icons/office.svg";
import outdoor from "@/assets/images/icons/outdoor-cafe.svg";
import bed_2 from "@/assets/images/icons/bed-2.svg";
import LoginButton from './LoginButton';

// All Category Items
const allCategoryItems = [
    {
        name: "Sofa",
        image: sofa
    },
    {
        name: "Living Room",
        image: terrace
    },
    {
        name: "Bedroom",
        image: bed
    },
    {
        name: "Office",
        image: office
    },
    {
        name: "Outdoor",
        image: outdoor
    },
    {
        name: "Mattress",
        image: bed_2
    },
]

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                <div className="relative items-center hidden px-8 py-4 cursor-pointer bg-primary md:flex group">
                    <span className="text-white">
                        <FaBars />
                    </span>
                    <span className="ml-2 text-white capitalize">All Categories</span>

                    {/* dropdown */}
                    <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[300px]">
                        {/* All Category Items */}
                        {
                            allCategoryItems.map((item, index) => <div key={index} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <Image src={item.image} alt={item.name} width={20} height={20} className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">{item.name}</span>
                            </div>)
                        }
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between flex-grow py-5 md:pl-12">
                    <div className="flex flex-wrap items-center gap-2 capitalize sm:gap-3 md:gap-5">
                        <Link href="/" className="text-gray-200 transition hover:text-white">Home</Link>
                        <Link href="/shop" className="text-gray-200 transition hover:text-white">Shop</Link>
                        <Link href="#" className="text-gray-200 transition hover:text-white">About us</Link>
                        <Link href="#" className="text-gray-200 transition hover:text-white">Contact us</Link>
                    </div>
                    <LoginButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;