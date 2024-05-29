'use client';

import FormControl from "@/app/components/FormControl/FormControl";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "sonner";

const LoginForm = ({ formControl, remember, forgot_password, submit_button }) => {
    const { email: emailField, password: passwordField } = formControl;
    const [error, setError] = useState({ email: null, password: null });
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const addToWishlist = useCallback(async (productId, email) => {
        const response = await fetch('/api/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, email }),
        });
        return response.json();
    }, []);

    const loginHandler = useCallback(async (formData) => {
        setError({ email: null, password: null });
        setLoading(true);

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            setError({
                email: !email ? 'Email is required' : null,
                password: !password ? 'Password is required' : null
            });
            setLoading(false);
            return;
        }

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result.error) {
                toast.error(result.error);
                setLoading(false);
                return;
            }

            // All Search Params
            const wishlist = searchParams.get("wishlist");
            const productId = searchParams.get("productId");

            if (wishlist && productId) {
                const wishlistResult = await addToWishlist(productId, email);
                if (wishlistResult.success) {
                    toast.success("Wishlist added successfully");
                    router.push("/wishlist");
                } else {
                    toast.error(wishlistResult.message || "Error adding to wishlist");
                }
            } else {
                toast.success("Login Successful");
                router.push("/");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [addToWishlist, router, searchParams]);

    return (
        <form onSubmit={(e) => { e.preventDefault(); loginHandler(new FormData(e.target)); }}>
            <div className='space-y-2'>
                <FormControl
                    label={emailField.label}
                    id='email'
                    type='email'
                    placeholder={emailField.placeholder}
                    error={error.email}
                >
                    {error.email && <p className='text-red-500'><small>{error.email}</small></p>}
                </FormControl>
                <FormControl
                    label={passwordField.label}
                    id='password'
                    type='password'
                    placeholder={passwordField.placeholder}
                    error={error.password}
                >
                    {error.password && <p className='text-red-500'><small>{error.password}</small></p>}
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
                    <label htmlFor='remember' className='ml-3 text-gray-600 cursor-pointer'>
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
