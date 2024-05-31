import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ShareSocialMedia = () => {
    return (
        <div className='flex gap-3 mt-4'>
            <Link
                href='#'
                className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
            >
                <FaFacebookF />
            </Link>
            <Link
                href='#'
                className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
            >
                <FaTwitter />
            </Link>
            <Link
                href='#'
                className='flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500'
            >
                <FaInstagram />
            </Link>
        </div>
    );
};

export default ShareSocialMedia;