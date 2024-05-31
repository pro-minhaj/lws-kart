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
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const fetchHandler = useCallback(async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    }, []);

    const loginHandler = async (formData) => {
        setError({});
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

            const wishlist = searchParams.get("wishlist");
            const productId = searchParams.get("productId");
            const cart = searchParams.get("cart");
            const quantity = searchParams.get("quantity") || 1;
            const size = searchParams.get("size");

            if (cart && productId) {
                const cartResult = await fetchHandler('/api/cart', { productId, quantity, size, email });
                if (cartResult.success) {
                    toast.success("Cart added successfully");
                    router.push("/checkout");
                } else {
                    toast.error(cartResult.message || "Error adding to Cart");
                }
            } else if (wishlist && productId) {
                const wishlistResult = await fetchHandler('/api/wishlist', { productId, email });
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
            toast.error("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

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
