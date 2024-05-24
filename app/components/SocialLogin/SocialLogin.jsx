"use client";
import facebookImg from "@/assets/images/icons/facebook.png";
import googleImg from "@/assets/images/icons/google.svg";
import SocialLoginButton from "./SocialLoginButton";
import { signIn } from "next-auth/react"

const SocialLogin = ({ lang }) => {
    const { facebook, google } = lang;

    return (
        <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
            <SocialLoginButton imageSrc={facebookImg} name={facebook} />
            <SocialLoginButton onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000' })} imageSrc={googleImg} name={google} />
        </div>
    );
};

export default SocialLogin;