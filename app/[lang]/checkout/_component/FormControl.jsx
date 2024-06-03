
const FormControl = ({ id, label, required, defaultValue, readOnly, disabled, children }) => {
    return (
        <div>
            <label htmlFor={id} className='text-gray-600'>
                {label} {required && <span className='text-primary'>*</span>}
            </label>
            <input
                disabled={disabled && disabled}
                defaultValue={defaultValue && defaultValue}
                readOnly={readOnly && readOnly}
                type='text'
                name={id}
                id={id}
                className='input-box disabled:bg-gray-400/10 read-only:bg-gray-400/10'
            />
            <>
                {children}
            </>
        </div>
    );
};

export default FormControl;