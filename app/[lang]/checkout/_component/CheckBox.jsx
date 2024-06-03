"use client";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import Link from "next/link";
import { useState } from "react";

const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className='flex items-center mt-2 mb-4'>
                <input
                    required
                    onChange={e => setChecked(e.target.checked)}
                    type='checkbox'
                    name='agreement'
                    id='agreement'
                    className='w-3 h-3 rounded-sm cursor-pointer text-primary focus:ring-0'
                />
                <label
                    htmlFor='agreement'
                    className='ml-3 text-sm text-gray-600 cursor-pointer'
                >
                    I agree to the{' '}
                    <Link className='text-primary' href='#'>
                        terms & conditions
                    </Link>
                </label>
            </div>
            <SubmitButton disabled={checked ? false : true}>Place order</SubmitButton>
        </div>
    );
};

export default CheckBox;