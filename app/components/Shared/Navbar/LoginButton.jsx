"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginButton = ({ dict }) => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login" || pathname === '/register';
    if (isLoginPage) {
        return null;
    }
    return (
        <div className="flex items-center">
            <Link href="/login" className="text-gray-200 transition hover:text-white">{dict.login}</Link>
            <span className="text-gray-200 transition hover:text-white">/</span>
            <Link href="/register" className="text-gray-200 transition hover:text-white">{dict.register}</Link>
        </div>
    );
};

export default LoginButton;