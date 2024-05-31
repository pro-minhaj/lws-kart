
const SingleCategory = ({ name, count }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name={name}
                id={name}
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
            />
            <label htmlFor={name} className="ml-3 text-gray-200 cursor-pointer lg:text-gray-600">
                {name}
            </label>
            <div className="ml-auto text-sm text-gray-200 lg:text-gray-600">({count})</div>
        </div>
    );
};

export default SingleCategory;