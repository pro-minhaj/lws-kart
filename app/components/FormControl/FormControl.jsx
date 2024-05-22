
const FormControl = ({ label, type, id, placeholder, error, children }) => {
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
                style={error && { border: '1px solid #ef4444' }}
            />
            {children}
        </div>
    );
};

export default FormControl;