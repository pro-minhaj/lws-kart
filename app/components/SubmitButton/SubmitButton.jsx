"use client";
import { useFormStatus } from 'react-dom'
import ButtonLoading from '../Loading/ButtonLoading/ButtonLoading';

const SubmitButton = ({ children }) => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type='submit'
            className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#df4343] text-white !bg-[#DF3B3B]'
        >
            {pending && <ButtonLoading />} {children}
        </button>
    );
};

export default SubmitButton;