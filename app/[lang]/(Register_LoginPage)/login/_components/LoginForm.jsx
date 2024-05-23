"use client";
import FormControl from "@/app/components/FormControl/FormControl";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = ({ formControl, remember, forgot_password, submit_button }) => {
    const { email, password } = formControl;
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const router = useRouter();

    // Login Handler
    const loginHandler = async (e) => {
        setLoading(true)
        setError("")
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Check Email and Password fields
        if (!email) {
            setLoading(false)
            setError({
                email: 'Email is required'
            });
            return;
        } else if (!password) {
            setLoading(false)
            setError({
                password: 'Password is required'
            });
            return;
        }

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result.error) {
                toast.error(result.error)
            }
            else {
                router.push("/")
                toast.success("Login SuccessFul")
            }
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={loginHandler}>
            <div className='space-y-2'>
                <FormControl
                    label={email.label}
                    id='email'
                    type='email'
                    placeholder={email.placeholder}
                    error={error?.email && true}
                >
                    {
                        error?.email && <p className='text-red-500'>
                            <small>
                                {error.email}
                            </small>
                        </p>
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
                        error?.password && <p className='text-red-500'>
                            <small>
                                {error.password}
                            </small>
                        </p>
                    }
                </FormControl>
            </div>
            <div className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        name='remember'
                        id='remember'
                        className='rounded-sm cursor-pointer text-primary focus:ring-0'
                    />
                    <label
                        htmlFor='remember'
                        className='ml-3 text-gray-600 cursor-pointer'
                    >
                        {remember}
                    </label>
                </div>
                <Link href='#' className='text-primary'>
                    {forgot_password}
                </Link>
            </div>
            <div className='mt-4'>
                <SubmitButton loading={loading}>
                    {submit_button}
                </SubmitButton>
            </div>
        </form>
    );
};

export default LoginForm;