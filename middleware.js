import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

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

export function middleware(request) {
    const pathname = request.nextUrl.pathname || '';

    const pathNameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
    );

    if (pathNameIsMissingLocale) {
        const locale = getLocale(request);

        const url = new URL(`/${locale}/${pathname}`, request.url);
        const response = NextResponse.redirect(url);

        response.cookies.set(LOCALE_COOKIE_NAME, locale, { path: '/' });

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next).*)']
};
