import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Language
const defaultLocale = 'en';
const locales = ['en', 'bn'];
const LOCALE_COOKIE_NAME = 'lang';

function getLocale(request) {
    const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;

    if (localeCookie && locales.includes(localeCookie)) {
        return localeCookie;
    }

    const acceptedLanguage = request.headers.get('accept-language') ?? '';
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptedLanguage } });
    const languages = negotiator.languages();

    return match(languages, locales, defaultLocale);
}

export async function middleware(req) {
    const lang = cookies().get(LOCALE_COOKIE_NAME)?.value;

    //Specify protected and public routes
    const protectedRotes = [
        '/wishlist',
        '/checkout',
        '/account',
        `/${lang}/wishlist`,
        `/${lang}/checkout`,
        `/${lang}/account`
    ];
    const publicRoutes = ['/login', '/register', `/${lang}/register`, `/${lang}/login`];

    const token = await getToken({ req });
    const pathname = req.nextUrl.pathname || '';

    // Check Protected Routes
    const isProtectedRoute = protectedRotes.includes(pathname);
    const isPublicRoute = publicRoutes.includes(pathname);

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    const pathNameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
    );

    if (pathNameIsMissingLocale) {
        const locale = getLocale(req);

        const url = new URL(`/${locale}/${pathname}`, req.url);
        const response = NextResponse.redirect(url);

        response.cookies.set(LOCALE_COOKIE_NAME, locale, { path: '/' });

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next).*)']
};
