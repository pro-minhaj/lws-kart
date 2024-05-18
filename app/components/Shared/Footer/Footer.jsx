import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Link from 'next/link';

// socialMedia Items
const socialMedias = [
    {
        icon: <FaFacebook />,
        url: 'https://www.facebook.com/fxminhaj1002/',
    },
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/fxminhaj/',
    },
    {
        icon: <FaTwitter />,
        url: 'https://x.com/Parsonal32',
    },
    {
        icon: <FaGithub />,
        url: 'https://github.com/pro-minhaj',
    },
]

const Footer = () => {

    return (
        <>
            <footer className="pt-16 pb-12 bg-white border-t border-gray-100">
                <div className="container grid grid-cols-3">
                    <div className="col-span-1 mr-2 space-y-8">
                        <Image src={logo} alt="logo" width={150} height={50} />
                        <div className="flex items-center gap-3">
                            {/* Social Media */}
                            {
                                socialMedias.map((item, index) => <Link target='_blank' className='p-3 text-gray-600 bg-gray-200 rounded-full hover:text-gray-500' href={item.url} key={index}>
                                    <span className='text-xl'>
                                        {item.icon}
                                    </span>
                                </Link>)
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Marketing</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Analitycs</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Commerce</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Insights</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Pricing</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Documentation</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Guides</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">API Status</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Marketing</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Analitycs</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Commerce</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Insights</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Pricing</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Documentation</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">Guides</span>
                                    <span className="block text-base text-gray-500 hover:text-gray-900">API Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ./footer */}

            {/* copyright */}
            <div className="py-4 bg-gray-800">
                <div className="container flex items-center justify-between">
                    <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
                    <div>
                        <Image src="/assets/images/methods.png" alt="methods" width={50} height={20} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;