import Banner from '@/app/components/HomePage/Banner/Banner';
import Features from '@/app/components/HomePage/Features/Features';

export default function Home({ params: { lang } }) {
    return (
        <>
            <Banner lang={lang} />
            <Features lang={lang} />
        </>
    );
}
