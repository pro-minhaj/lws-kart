import FormControl from '@/app/components/FormControl/FormControl';
import SocialLogin from '@/app/components/SocialLogin/SocialLogin';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div>
            <div className='py-16 contain'>
                <div className='max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7'>
                    <h2 className='mb-1 text-2xl font-medium text-center uppercase'>Login</h2>
                    <p className='mb-6 text-sm text-center text-gray-600'>welcome back customer</p>
                    <form action='#' method='post' autoComplete='off'>
                        <div className='space-y-2'>
                            <FormControl
                                label='Email address'
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                            ></FormControl>
                            <FormControl
                                label='Password'
                                id='password'
                                type='password'
                                placeholder='Enter your password'
                            ></FormControl>
                        </div>
                        <div className='flex items-center justify-between mt-6'>
                            <div className='flex items-center'>
                                <input
                                    type='checkbox'
                                    name='remember'
                                    id='remember'
                                    className='rounded-sm cursor-pointer text-primary focus:ring-0'
                                />
                                <label for='remember' className='ml-3 text-gray-600 cursor-pointer'>
                                    Remember me
                                </label>
                            </div>
                            <Link href='#' className='text-primary'>
                                Forgot password
                            </Link>
                        </div>
                        <div className='mt-4'>
                            <button
                                type='submit'
                                className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#df4343] text-white !bg-[#DF3B3B]'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Login with */}
                    <div className='relative flex justify-center mt-6'>
                        <div className='relative z-10 px-3 text-gray-600 uppercase bg-white'>
                            OR LOGIN WITH
                        </div>
                        <div className='absolute left-0 w-full border-b-2 border-gray-200 top-3'></div>
                    </div>
                    {/* Social Login */}
                    <SocialLogin />
                    {/* ./Login with */}
                    <p className='mt-4 text-center text-gray-600'>
                        Do not have account?{' '}
                        <Link className='text-primary' href='/register'>
                            Register now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
