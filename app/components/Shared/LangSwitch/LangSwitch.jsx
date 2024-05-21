"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitcher() {
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        // Set the initial language from the cookie
        const lang = Cookies.get('lang') || 'en';
        setCurrentLang(lang);
    }, []);

    const changeLanguage = (locale) => {
        Cookies.set('lang', locale);

        // Construct the new path
        let newPathname = `/${locale}`;
        if (router.asPath && router.asPath !== '/') {
            newPathname += router.asPath;
        }

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
