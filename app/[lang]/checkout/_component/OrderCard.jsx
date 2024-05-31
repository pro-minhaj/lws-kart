import { FaTrash } from 'react-icons/fa';

const OrderCard = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <h5 className='font-medium text-gray-800'>Italian shape sofa</h5>
                    <p className='text-sm text-gray-600'>Size: M</p>
                </div>
                <p className='text-gray-600'>x3</p>
                <p className='font-medium text-gray-800'>$320</p>
                <button className='hover:text-red-500' type='button'>
                    <FaTrash />
                </button>
            </div>
        </>
    );
};

export default OrderCard;