"use client";
import { useFormStatus } from 'react-dom'
import ButtonLoading from '../Loading/ButtonLoading/ButtonLoading';

const SubmitButton = ({ loading, disabled, children }) => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={loading ? loading : pending || disabled || false}
            type='submit'
            className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 !hover:bg-transparent text-white !bg-[#DF3B3B]'
        >
            {loading ? <ButtonLoading /> : pending && <ButtonLoading />} {children}
        </button>
    );
};

export default SubmitButton;