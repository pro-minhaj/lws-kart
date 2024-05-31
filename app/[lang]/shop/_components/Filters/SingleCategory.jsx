
const SingleCategory = ({ name, count, isOpen }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name={name}
                id={name}
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
            />
            <label htmlFor={name} className={`ml-3 cursor-pointer ${isOpen ? "text-gray-200" : "text-gray-600"}`}>
                {name}
            </label>
            <div className={`ml-auto text-sm ${isOpen ? "text-gray-200" : "text-gray-600"}`}>({count})</div>
        </div>
    );
};

export default SingleCategory;