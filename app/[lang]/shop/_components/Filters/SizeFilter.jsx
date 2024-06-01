"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Sizes Array
const sizes = [
    "2-seater",
    "3-seater",
    "L-shaped"
];

const SizeFilter = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParamsSize = searchParams.get('size') || '';

    const handleChangeSize = (size) => {
        const params = new URLSearchParams(searchParams);
        if (size !== searchParamsSize) {
            params.set('size', size);
            replace(pathname + '?' + params.toString());
        }
        else if (size === searchParamsSize) {
            params.delete('size');
            replace(pathname);
        }
    }

    return (
        <div className="flex items-center gap-2">
            {
                sizes.map((size, index) => <div key={index}>
                    <label
                        htmlFor={size}
                        onClick={() => handleChangeSize(size)}
                        className={`flex items-center justify-center px-3 py-1 text-base border border-gray-200 !rounded-md shadow-sm cursor-pointer lg:text-gray-600 ${searchParamsSize === size ? "bg-red-500 !text-white" : "text-gray-300"}`}
                    >
                        {size}
                    </label>
                </div>)
            }

        </div>
    );
};

export default SizeFilter;