import Image from "next/image";

const SocialLoginButton = ({ imageSrc, name, onClick }) => {
    return (
        <button onClick={onClick && onClick} className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#F4F4F5]'>
            <Image src={imageSrc} alt={name} width={24} height={24} />
            <span className='font-medium'>{name}</span>
        </button>
    );
};

export default SocialLoginButton;