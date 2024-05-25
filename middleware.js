import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Constants
const defaultLocale = 'en';
const locales = ['en', 'bn'];
const LOCALE_COOKIE_NAME = 'lang';

// Helper function to determine the locale
function getLocale(request) {
    const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;

    if (localeCookie && locales.includes(localeCookie)) {
        return localeCookie;
    }

    const negotiator = new Negotiator({
        headers: { 'accept-language': request.headers.get('accept-language') ?? '' }
    });
    const languages = negotiator.languages();

    return match(languages, locales, defaultLocale);
}

// Middleware function
export async function middleware(req) {
    const locale = cookies().get(LOCALE_COOKIE_NAME)?.value || getLocale(req);

    const token = await getToken({ req });
    const pathname = req.nextUrl.pathname || '';

    // Define routes
    const protectedRoutes = ['/wishlist', '/checkout', '/account'];
    const publicRoutes = ['/login', '/register'];

    // Normalize pathname
    const normalizedPathname = pathname.replace(`/${locale}`, '') || '/';

    // Check Protected Routes
    if (protectedRoutes.some((route) => normalizedPathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.nextUrl));
        }
    }

    // Check Public Routes
    if (publicRoutes.some((route) => normalizedPathname.startsWith(route))) {
        if (token) {
            return NextResponse.redirect(new URL('/', req.nextUrl));
        }
    }

    // Redirect to locale-specific URL if needed
    if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        const url = new URL(`/${locale}${pathname}`, req.url);
        const response = NextResponse.redirect(url);
        response.cookies.set(LOCALE_COOKIE_NAME, locale, { path: '/' });
        return response;
    }

    return NextResponse.next();
}

// Matcher configuration
export const config = {
    matcher: ['/((?!_next).*)']
};
