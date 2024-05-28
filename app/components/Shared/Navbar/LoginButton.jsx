"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

const LoginButton = ({ dict }) => {
    const pathname = usePathname();
    const { data, status } = useAuth();

    const isLoginPage = pathname === "/login" || pathname === '/register';

    if (isLoginPage) {
        return null;
    }

    if (status === "loading") {
        return <ButtonLoading />;
    }

    const handleLogout = () => {
        signOut()
        toast.success("Logout successfully")
    }

    return (
        <>
            {
                status === "authenticated" ?
                    <div className="flex items-center gap-2 text-white">
                        <p>
                            <small>{data?.name}</small>
                        </p>
                        <button onClick={handleLogout} className="text-sm">
                            Logout
                        </button>
                    </div>
                    :
                    <div className="flex items-center">
                        <Link href="/login" className="text-gray-200 transition hover:text-white">{dict.login}</Link>
                        <span className="text-gray-200 transition hover:text-white">/</span>
                        <Link href="/register" className="text-gray-200 transition hover:text-white">{dict.register}</Link>
                    </div>
            }
        </>
    );
};

export default LoginButton;