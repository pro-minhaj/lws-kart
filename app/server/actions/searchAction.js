'use server';
import { redirect } from 'next/navigation';

const searchAction = async (formData) => {
    const search = formData.get('search');
    const lang = formData.get('lang');
    if (search) {
        redirect(`/${lang}/shop?search=${search}`);
    } else {
        redirect(`/${lang}/shop`);
    }
};

export default searchAction;
