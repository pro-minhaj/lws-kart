import { FaEdit } from "react-icons/fa";

const CardInformation = () => {
    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-medium text-gray-800'>Card Information</h3>
                <button className='text-primary'>
                    <FaEdit />
                </button>
            </div>
            <div className='space-y-1'>
                <h4 className='font-medium text-gray-700'>John Doe</h4>
                <p className='text-gray-800'>Medan, North Sumatera</p>
                <p className='text-gray-800'>20317</p>
                <p className='text-gray-800'>0811 8877 988</p>
            </div>
        </>
    );
};

export default CardInformation;