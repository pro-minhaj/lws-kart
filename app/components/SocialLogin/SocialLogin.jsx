import Image from "next/image";
import facebookImg from "@/assets/images/icons/facebook.png";
import googleImg from "@/assets/images/icons/google.svg";

const SocialLogin = ({ lang }) => {
    const { facebook, google } = lang;
    return (
        <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
            <button className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#F4F4F5]'>
                <Image src={facebookImg} alt='Facebook' width={24} height={24} />
                <span className='font-medium'>{facebook}</span>
            </button>
            <button className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#F4F4F5]'>
                <Image src={googleImg} alt='Google' width={24} height={24} />
                <span className='font-medium'>{google}</span>
            </button>
        </div>
    );
};

export default SocialLogin;