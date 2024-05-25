
const FormControl = ({ id, label, required, children }) => {
    return (
        <div>
            <label htmlFor={id} className='text-gray-600'>
                {label} {required && <span className='text-primary'>*</span>}
            </label>
            <input
                type='text'
                name={id}
                id={id}
                className='input-box'
            />
            <>
                {children}
            </>
        </div>
    );
};

export default FormControl;