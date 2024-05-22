import FormControl from '@/app/components/FormControl/FormControl';
import SocialLogin from '@/app/components/SocialLogin/SocialLogin';
import Link from 'next/link';
import { getDictionary } from '../../dictionaries/dictionaries';

const LoginPage = async ({ params: { lang } }) => {
    const {
        login_page: {
            form_heading,
            form_subheading,
            form_control: { email, password },
            remember,
            forgot_password,
            submit_button,
            or_login,
            do_not_have_account,
            register_now,
            social_login
        }
    } = await getDictionary(lang);

    return (
        <div>
            <div className='py-16 contain'>
                <div className='max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7'>
                    <h2 className='mb-1 text-2xl font-medium text-center uppercase'>
                        {form_heading}
                    </h2>
                    <p className='mb-6 text-sm text-center text-gray-600'>{form_subheading}</p>
                    <form>
                        <div className='space-y-2'>
                            <FormControl
                                label={email.label}
                                id='email'
                                type='email'
                                placeholder={email.placeholder}
                            ></FormControl>
                            <FormControl
                                label={password.label}
                                id='password'
                                type='password'
                                placeholder={password.placeholder}
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
                            <button
                                type='submit'
                                className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 hover:bg-[#df4343] text-white !bg-[#DF3B3B]'
                            >
                                {submit_button}
                            </button>
                        </div>
                    </form>
                    {/* Login with */}
                    <div className='relative flex justify-center mt-6'>
                        <div className='relative z-10 px-3 text-gray-600 uppercase bg-white'>
                            {or_login}
                        </div>
                        <div className='absolute left-0 w-full border-b-2 border-gray-200 top-3'></div>
                    </div>
                    {/* Social Login */}
                    <SocialLogin lang={social_login} />
                    {/* ./Login with */}
                    <p className='mt-4 text-center text-gray-600'>
                        {do_not_have_account}{' '}
                        <Link className='text-primary' href='/register'>
                            {register_now}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
