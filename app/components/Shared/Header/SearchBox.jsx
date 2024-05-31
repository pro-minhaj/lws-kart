import searchAction from "@/app/server/actions/searchAction";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ header }) => {
    return (
        <form action={searchAction} className='flex'>
            <div className='flex items-center w-full px-3 py-0.5 border border-r-0 border-primary rounded-l-md'>
                <span className="text-lg text-gray-400">
                    <IoSearch />
                </span>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="w-full border-transparent !ring-transparent !border-none outline-none !focus:border-none focus:outline-none"
                    placeholder={`${header.search}...`}
                />
            </div>
            <button
                type="submit"
                className="px-5 text-white transition-colors border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary"
            >
                {header.search}
            </button>
        </form>
    );
};

export default SearchBox;