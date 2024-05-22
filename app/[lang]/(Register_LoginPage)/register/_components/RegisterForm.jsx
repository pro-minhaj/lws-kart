"use client";
import FormControl from "@/app/components/FormControl/FormControl";
import { createNewUser } from "@/app/server/actions/createuser";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = ({ formControl, remember, submit_button }) => {
    const { name, email, password, confirm_password } = formControl;
    const [error, setError] = useState(null);

    // Form Handler
    const handleRegister = async (formData) => {

        try {
            // Call the server function to create a new user
            const user = await createNewUser(formData);
            if (user?.errors) {
                setError(user.errors)
                return;
            }
            else if (user?.error) {
                toast.error(user.error)
                return
            }
            else {
                toast.success('User Created Successfully');
            }
        } catch (error) {
            return toast.error(error.message)
        }
    };

    return (
        <form action={handleRegister}>
            <div className='space-y-2'>
                <FormControl
                    label={name.label}
                    id='name'
                    type='text'
                    placeholder={name.placeholder}
                    error={error?.name && true}
                >
                    {
                        error && error?.name?.map((n, i) => <p className='text-red-500' key={i}>
                            <small>
                                {n}
                            </small>
                        </p>)
                    }
                </FormControl>
                <FormControl
                    label={email.label}
                    id='email'
                    type='email'
                    placeholder={email.placeholder}
                    error={error?.email && true}
                >
                    {
                        error && error?.email?.map((n, i) => <p className='text-red-500' key={i}>
                            <small>
                                {n}
                            </small>
                        </p>)
                    }
                </FormControl>
                <FormControl
                    label={password.label}
                    id='password'
                    type='password'
                    placeholder={password.placeholder}
                    error={error?.password && true}
                >
                    {
                        error && error?.password?.map((n, i) => <p className='text-red-500' key={i}>
                            <small>
                                {n}
                            </small>
                        </p>
                        )
                    }
                </FormControl>
                <FormControl
                    label={confirm_password.label}
                    id='confirm'
                    type='password'
                    placeholder={confirm_password.placeholder}
                    error={error?.confirmPassword && true}
                >
                    {
                        error && error?.confirmPassword?.map((n, i) => <p className='text-red-500' key={i}>
                            <small>
                                {n}
                            </small>
                        </p>
                        )
                    }
                </FormControl>
            </div>
            <div className='mt-6'>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        name='agreement'
                        id='agreement'
                        className='rounded-sm cursor-pointer text-primary focus:ring-0'
                        required
                    />
                    <label
                        htmlFor='agreement'
                        className='ml-3 text-gray-600 cursor-pointer'
                    >
                        {remember.read_agree}{' '}
                        <span className='cursor-pointer text-primary'>
                            {remember.terms_conditions}
                        </span>
                    </label>
                </div>
            </div>
            <div className='mt-4'>
                <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#df4343] text-white !bg-[#DF3B3B]'
                >
                    {submit_button}
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;