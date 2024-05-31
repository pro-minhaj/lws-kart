"use client";
import { MdLanguage } from "react-icons/md";
import { useMemo, useCallback } from "react";
import { changeLanguage } from "@/app/server/actions/langchange";
import { usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LanguageSwitcher({ currentLang }) {
    const lang = useMemo(() => currentLang || 'en', [currentLang]);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const langChange = useCallback(async () => {
        try {
            const newLang = lang === 'en' ? 'bn' : 'en';
            if (!pathname || !searchParams) {
                throw new Error('Missing required parameters: pathname or searchParams');
            }
            await changeLanguage(pathname, newLang, searchParams);
        } catch (error) {
            toast.error(error.message);
        }
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
