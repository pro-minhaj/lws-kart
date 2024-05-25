"use client";
import { MdLanguage } from "react-icons/md";
import { changeLanguage } from "@/app/server/actions/langchange";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLang }) {
    const lang = currentLang || 'en';
    const pathname = usePathname();

    const langChange = () => {
        const newLang = lang === 'en' ? 'bn' : 'en';
        changeLanguage(pathname, newLang);
    }

    return (
        <>
            <button
                type="button"
                className='flex items-center gap-1 text-sm'
                onClick={langChange}
                aria-label={lang === 'en' ? "Switch to Bengali" : "Switch to English"}
            >
                <MdLanguage className='text-xl' /> <span className="hidden sm:block">{lang === 'en' ? "বাংলা" : "English"}</span>
            </button>
        </>
    );
}
