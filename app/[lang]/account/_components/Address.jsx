import { FaEdit } from "react-icons/fa";

const Address = ({ address }) => {
    console.log(address);
    const modifiedAddress = {
        email: address.email,
        address: address.address,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
        country: address.country,
    }
    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-medium text-gray-800'>Shipping address</h3>
                <button className='text-primary'>
                    <FaEdit />
                </button>
            </div>
            <div className='space-y-1'>
                {Object.entries(modifiedAddress).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                        {value}
                    </li>
                ))}
            </div>
        </>
    );
};

export default Address;