'use server';
import { redirect } from 'next/navigation';

const searchAction = async (formData) => {
    const search = formData.get('search');
    redirect(`/shop?search=${search}`);
};

export default searchAction;
