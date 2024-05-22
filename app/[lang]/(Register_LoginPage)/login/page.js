import FormControl from '@/app/components/FormControl/FormControl';
import SocialLogin from '@/app/components/SocialLogin/SocialLogin';
import Link from 'next/link';
import { getDictionary } from '../../dictionaries/dictionaries';
import LoginForm from './_components/LoginForm';

const LoginPage = async ({ params: { lang } }) => {
    const {
        login_page: {
            form_heading,
            form_subheading,
            form_control,
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
                    {/* Login Form */}

                    <LoginForm
                        formControl={form_control}
                        remember={remember}
                        forgot_password={forgot_password}
                        submit_button={submit_button}
                    />

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
