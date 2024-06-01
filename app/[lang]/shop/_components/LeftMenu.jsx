import getAllCategory from "@/app/server/getData/shopPage/getAllCategoryAndProductCount";
import SingleCategory from "./Filters/SingleCategory";
import ToggleDrawer from "./ToggleDrawer";
import MinAndMaxPrice from "./Filters/MinAndMaxPrice";
import SizeFilter from "./Filters/SizeFilter";

const LeftMenu = async () => {
    const getAllCategoriesReq = await getAllCategory();
    const getAllCategories = JSON.parse(getAllCategoriesReq);

    return (
        <>
            <ToggleDrawer>
                <div className="space-y-5 divide-y divide-gray-200">
                    {/* Category Filter */}
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

                    {/* Price Filter */}
                    <div className="pt-4">
                        <MinAndMaxPrice />
                    </div>

                    {/* Select Size */}
                    <div className="pt-4">
                        <h3 className="mb-4 text-xl font-medium text-gray-200 uppercase lg:text-gray-800">Size</h3>
                        <SizeFilter />
                    </div>
                </div>
            </ToggleDrawer >
        </>
    );
};

export default LeftMenu;