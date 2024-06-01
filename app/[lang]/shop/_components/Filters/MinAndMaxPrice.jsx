"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const MinAndMaxPrice = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [error, setError] = useState({});
    const minPrice = searchParams.get("min") || 0;
    const maxPrice = searchParams.get("max") || 0;

    const handleChangePrice = (e) => {
        e.preventDefault();
        const min = e.target.min.value;
        const max = e.target.max.value;

        if (!min || !max) {
            setError({
                min: "Min required",
                max: "Max required",
            })
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.set("min", min);
        params.set("max", max);
        replace(pathname + "?" + params.toString());
    }

    // Reset Price Query
    const resetPriceQuery = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("min");
        params.delete("max");
        replace(pathname + "?" + params.toString());
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-gray-200 uppercase lg:text-gray-800">
                    Price
                </h3>
                <button onClick={resetPriceQuery} className="!text-gray-600 !bg-gray-300 px-2 rounded" type="button">Reset</button>
            </div>
            <form onSubmit={handleChangePrice} className="mt-4">
                <div className="flex items-center">
                    <input
                        type="number"
                        name="min"
                        id="min"
                        className={`w-full px-3 py-1 text-gray-300 bg-transparent rounded shadow-sm lg:text-gray-600 lg:border-gray-300 focus:border-primary focus:ring-0 ${error.min ? "placeholder:text-red-500" : "placeholder:text-gray-500"}`}
                        style={error.min && { borderColor: "red" }}
                        placeholder={error.min ? error.min : "min"}
                        defaultValue={minPrice}
                        min={0}
                    />
                    <span className="mx-3 text-gray-500">-</span>
                    <input
                        type="number"
                        name="max"
                        id="max"
                        className={`w-full px-3 py-1 text-gray-300 bg-transparent rounded shadow-sm lg:text-gray-600 lg:border-gray-300 focus:border-primary focus:ring-0 ${error.max ? "placeholder:text-red-500" : "placeholder:text-gray-500"}`}
                        style={error.max && { borderColor: "red" }}
                        placeholder={error.max ? error.max : "min"}
                        defaultValue={maxPrice}
                        min={0}
                    />
                </div>
                <button className="w-full py-1 mt-3 text-sm text-white transition-colors border rounded bg-primary hover:bg-transparent hover:text-red-500 hover:border-red-500" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default MinAndMaxPrice;