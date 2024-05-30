"use client";
import facebookImg from "@/assets/images/icons/facebook.png";
import googleImg from "@/assets/images/icons/google.svg";
import SocialLoginButton from "./SocialLoginButton";
import { signIn } from "next-auth/react"

const SocialLogin = ({ lang }) => {
    const { facebook, google } = lang;

    const handleFacebookLogin = async () => {
        await signIn("facebook")
    }

    const handleGoogleLogin = async () => {
        await signIn("google")
    }

    return (
        <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
            <SocialLoginButton onClick={handleFacebookLogin} imageSrc={facebookImg} name={facebook} />
            <SocialLoginButton onClick={handleGoogleLogin} imageSrc={googleImg} name={google} />
        </div>
    );
};

export default SocialLogin;