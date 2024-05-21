
const FormControl = ({ label, type, id, placeholder, children }) => {
    return (
        <div>
            <label htmlFor={id} className='block mb-2 text-gray-600'>
                {label}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                className='block w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 border border-gray-300 rounded focus:ring-0 focus:border-primary'
                placeholder={placeholder}
                required
            />
            {children}
        </div>
    );
};

export default FormControl;