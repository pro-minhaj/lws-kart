"use client";

import actionQuantity from "@/app/server/actions/cart/quantity";
import { LuMinus, LuPlus } from "react-icons/lu";
import { toast } from "sonner";

const OrderQuantity = ({ quantity, id }) => {
    // Handle quantity
    const handleQuantity = async (action) => {
        //handle quantity change here
        try {
            await actionQuantity(action, id);
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <button onClick={() => handleQuantity("minus")} type='button'>
                <LuMinus className='text-base' />
            </button>
            <p className='text-gray-600'>x{quantity}</p>
            <button onClick={() => handleQuantity("plus")} type='button'>
                <LuPlus className='text-base' />
            </button>
        </>
    );
};

export default OrderQuantity;