import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '../components/Shared/Header/Header';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'LWSKart',
    description: 'Generated by LWSkart app'
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'bn' }];
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
            </head>
            <body className={inter.className}>
                <Header lang={params.lang} />
                <Navbar lang={params.lang} />
                {children}
                <Footer lang={params.lang} />
            </body>
        </html>
    );
}