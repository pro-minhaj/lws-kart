"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitcher() {
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        const lang = Cookies.get('lang') || 'en';
        setCurrentLang(lang);
    }, [currentLang]);

    const changeLanguage = (locale) => {
        Cookies.set('lang', locale);
        const currentPathname = window.location.pathname;
        const newPathname = currentPathname.replace(`/${currentLang}`, `/${locale}`);
        router.push(newPathname);
    };


    return (
        <div>
            <button className='flex items-center gap-1 text-sm' onClick={() => changeLanguage(currentLang === 'en' ? 'bn' : 'en')}>
                <MdLanguage className='text-xl' /> {currentLang === 'en' ? "বাংলা" : "English"}
            </button>
        </div>
    );
}
