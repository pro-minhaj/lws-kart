"use client";
import { BsFilterRight } from "react-icons/bs";
import { useState } from "react";
import SingleCategory from "./Filters/SingleCategory";

const LeftMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="block lg:hidden ms-auto" onClick={toggleDrawer}>
                <div className="flex items-center gap-1">
                    <BsFilterRight className="text-2xl" /> <span>Filter</span>
                </div>
            </button>
            <div
                id="drawer-example"
                className={`fixed shadow-md lg:static top-0 left-0 z-40 h-screen lg:h-auto p-4 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} bg-black/90 w-80 lg:w-full lg:bg-transparent `}
                tabIndex="-1"
                aria-labelledby="drawer-label"
            >
                <div className="block lg:hidden">
                    <h5
                        id="drawer-label"
                        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Filter
                    </h5>
                    <button
                        type="button"
                        onClick={toggleDrawer}
                        aria-controls="drawer-example"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>

                <div className="space-y-5 divide-y divide-gray-200">
                    <div>
                        <h3 className="mb-4 text-xl font-medium text-gray-200 uppercase lg:text-gray-800">Categories</h3>
                        <div className="space-y-2">
                            <SingleCategory name="Bedroom" count={15} />
                            <SingleCategory name="Sofa" count={9} />
                            <SingleCategory name="Office" count={21} />
                            <SingleCategory name="Outdoor" count={10} />
                            <SingleCategory name="Outdoor" count={10} />
                            <SingleCategory name="Outdoor" count={10} />
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="mb-4 text-xl font-medium text-gray-200 uppercase lg:text-gray-800">
                            Price
                        </h3>
                        <div className="flex items-center mt-4">
                            <input
                                type="number"
                                name="min"
                                id="min"
                                className="w-full px-3 py-1 text-gray-300 bg-transparent rounded shadow-sm lg:text-gray-600 lg:border-gray-300 focus:border-primary focus:ring-0"
                                placeholder="min"
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="number"
                                name="max"
                                id="max"
                                className="w-full px-3 py-1 text-gray-300 bg-transparent rounded shadow-sm lg:text-gray-600 lg:border-gray-300 focus:border-primary focus:ring-0"
                                placeholder="max"
                            />
                        </div>
                    </div>

                    {/* Select Size */}
                    <div className="pt-4">
                        <h3 className="mb-4 text-xl font-medium text-gray-200 uppercase lg:text-gray-800">Size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    htmlFor="size-xs"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-300 border border-gray-200 rounded-sm shadow-sm cursor-pointer lg:text-gray-600"
                                >
                                    XS
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    htmlFor="size-xs"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-300 border border-gray-200 rounded-sm shadow-sm cursor-pointer lg:text-gray-600"
                                >
                                    X
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    htmlFor="size-xs"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-300 border border-gray-200 rounded-sm shadow-sm cursor-pointer lg:text-gray-600"
                                >
                                    M
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftMenu;