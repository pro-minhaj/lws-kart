import getAllCategory from "@/app/server/getData/shopPage/getAllCategoryAndProductCount";
import SingleCategory from "./Filters/SingleCategory";
import ToggleDrawer from "./ToggleDrawer";

const LeftMenu = async () => {
    const getAllCategoriesReq = await getAllCategory();
    const getAllCategories = JSON.parse(getAllCategoriesReq);

    const sizes = [
        "2-seater",
        "3-seater",
        "L-shaped"
    ];

    return (
        <>
            <ToggleDrawer>
                <div className="space-y-5 divide-y divide-gray-200">
                    <div>
                        <h3 className="mb-4 text-xl font-medium text-gray-200 uppercase lg:text-gray-800">Categories</h3>
                        <div className="space-y-2">
                            {
                                getAllCategories?.map((category) => (
                                    <SingleCategory
                                        key={category._id}
                                        name={category.name}
                                        count={category.count}
                                    />
                                ))
                            }
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
                            {
                                sizes.map((size, index) => <div key={index} className="size-selector">
                                    <input type="radio" name={size} id={size} className="hidden" />
                                    <label
                                        htmlFor={size}
                                        className="flex items-center justify-center px-3 py-1 text-base text-gray-300 border border-gray-200 rounded-sm shadow-sm cursor-pointer lg:text-gray-600"
                                    >
                                        {size}
                                    </label>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </ToggleDrawer >
        </>
    );
};

export default LeftMenu;