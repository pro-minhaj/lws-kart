"use client";

import { FaTrash } from "react-icons/fa";

const CartDelete = () => {
    return (
        <>
            <button className='hover:text-red-500' type='button'>
                <FaTrash />
            </button>
        </>
    );
};

export default CartDelete;