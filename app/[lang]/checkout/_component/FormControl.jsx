
const FormControl = ({ id, label, required, disabled, children }) => {
    return (
        <div>
            <label htmlFor={id} className='text-gray-600'>
                {label} {required && <span className='text-primary'>*</span>}
            </label>
            <input
                disabled={disabled && disabled}
                type='text'
                name={id}
                id={id}
                className='input-box disabled:bg-gray-400/10'
            />
            <>
                {children}
            </>
        </div>
    );
};

export default FormControl;