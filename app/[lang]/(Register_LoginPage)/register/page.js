import FormControl from '@/app/components/FormControl/FormControl';
import SocialLogin from '@/app/components/SocialLogin/SocialLogin';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div>
            <div className='py-16 contain'>
                <div className='max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7'>
                    <h2 className='mb-1 text-2xl font-medium text-center uppercase'>
                        Create an account
                    </h2>
                    <p className='mb-6 text-sm text-center text-gray-600'>
                        Register for new customer
                    </p>
                    <form action='#' method='post' autoComplete='off'>
                        <div className='space-y-2'>
                            <FormControl
                                label='Full Name'
                                id='name'
                                type='text'
                                placeholder='Enter your name'
                            ></FormControl>
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
                            <FormControl
                                label='Confirm password'
                                id='confirm'
                                type='password'
                                placeholder='Confirm password'
                            ></FormControl>
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
                                    I have read and agree to the{' '}
                                    <span className='cursor-pointer text-primary'>
                                        terms & conditions
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button
                                type='submit'
                                className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#df4343] text-white !bg-[#DF3B3B]'
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                    {/* Login with */}
                    <div className='relative flex justify-center mt-6'>
                        <div className='relative z-10 px-3 text-gray-600 uppercase bg-white'>
                            Or signup with
                        </div>
                        <div className='absolute left-0 w-full border-b-2 border-gray-200 top-3'></div>
                    </div>
                    {/* Social Login */}
                    <SocialLogin />
                    {/* ./Login with */}
                    <p className='mt-4 text-center text-gray-600'>
                        Already have an account?{' '}
                        <Link className='text-primary' href='/login'>
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
