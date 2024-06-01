"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SingleCategory = ({ name, count }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const searchParamsCategory = decodeURI(searchParams.get('category') || '');

    const handleChangeCategory = (e) => {
        const checked = e.target.checked;
        const params = new URLSearchParams(searchParams);
        if (checked) {
            params.set('category', [searchParamsCategory, encodeURI(name)]);
            router.replace(pathname + '?' + params.toString());
        }
        else {
            const categories = searchParamsCategory.split(",")
            const filterCategory = categories.filter(c => c !== name);
            params.set('category', [filterCategory]);
            if (filterCategory.length === 1) {
                params.delete('category');
                router.replace(pathname);
            }
            router.replace(pathname + '?' + params.toString());
        }
    }

    // Default Checked
    const checked = searchParamsCategory.includes(name);

    return (
        <div className="flex items-center">
            <input
                defaultChecked={checked}
                onChange={handleChangeCategory}
                type="checkbox"
                name={name}
                id={name}
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
            />
            <label htmlFor={name} className="ml-3 text-gray-200 capitalize cursor-pointer lg:text-gray-600">
                {name}
            </label>
            <div className="ml-auto text-sm text-gray-200 lg:text-gray-600">({count})</div>
        </div>
    );
};

export default SingleCategory;