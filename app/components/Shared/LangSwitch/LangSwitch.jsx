"use client";

import { MdLanguage } from "react-icons/md";
import { useMemo, useCallback } from "react";
import { changeLanguage } from "@/app/server/actions/langchange";
import { usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher({ currentLang }) {
    const lang = useMemo(() => currentLang || 'en', [currentLang]);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const langChange = useCallback(() => {
        const newLang = lang === 'en' ? 'bn' : 'en';
        changeLanguage(pathname, newLang, searchParams);
    }, [lang, pathname, searchParams]);

    return (
        <button
            type="button"
            className='flex items-center gap-1 text-sm'
            onClick={langChange}
            aria-label={lang === 'en' ? "Switch to Bengali" : "Switch to English"}
            aria-pressed={lang !== 'en'}
        >
            <MdLanguage className='text-xl' />
            <span className="hidden sm:block">
                {lang === 'en' ? "বাংলা" : "English"}
            </span>
        </button>
    );
}
