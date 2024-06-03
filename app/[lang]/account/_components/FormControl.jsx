import { Text, TextField } from "@radix-ui/themes";

const FormControl = ({ label, type, name, children }) => {
    return (
        <>
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    {label}
                </Text>
                <TextField.Root
                    required={true}
                    name={name}
                    type={type}
                    placeholder={`Enter your ${name}`}
                />
                {children}
            </label>
        </>
    );
};

export default FormControl;