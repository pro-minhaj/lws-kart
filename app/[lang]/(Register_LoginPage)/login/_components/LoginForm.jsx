import FormControl from "@/app/components/FormControl/FormControl";
import Link from "next/link";

const LoginForm = ({ formControl, remember, forgot_password, submit_button }) => {
    const { email, password } = formControl;

    return (
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
    );
};

export default LoginForm;