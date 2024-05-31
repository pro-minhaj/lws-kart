'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function changeLanguage(currentPath, locale, searchParams) {
    const cookieStore = cookies();
    const currentLang = cookieStore.get('lang')?.value || 'en';

    if (currentLang !== locale) {
        cookieStore.set('lang', locale);

        // Parse currentPath to handle query parameters
        const url = new URL(currentPath, process.env.BASE_URL || 'http://localhost');
        const pathSegments = url.pathname.split('/');
        const newPathSegments = pathSegments.map((segment) =>
            segment === currentLang ? locale : segment
        );
        url.pathname = newPathSegments.join('/');

        // Preserve search parameters
        const newSearchParams = new URLSearchParams(searchParams);
        url.search = newSearchParams.toString();

        redirect(url.pathname + url.search);
    }
}
