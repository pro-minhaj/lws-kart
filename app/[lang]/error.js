'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='flex flex-col items-center justify-center w-1/3 px-3 py-5 mx-auto my-8 space-y-3 border rounded-md md:my-10'>
            <h2 className='text-red-500'>Something went wrong!</h2>
            <button
                className='text-white bg-red-500 border px-3 py-1.5 rounded-md'
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
