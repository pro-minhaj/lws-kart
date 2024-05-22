'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function changeLanguage(currentPath, locale) {
    const cookieStore = cookies();
    const currentLang = cookieStore.get('lang').value || 'en';
    cookieStore.set('lang', locale);

    const newPathname = currentPath.replace(`/${currentLang}`, `/${locale}`);
    redirect(newPathname);
}
