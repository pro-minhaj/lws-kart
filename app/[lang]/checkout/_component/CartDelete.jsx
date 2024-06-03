"use client";
import deleteCart from "@/app/server/actions/cart/deleteCart";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

const CartDelete = ({ id }) => {
    // handle delete
    const handleDelete = async () => {
        // handle delete
        try {
            const productDelete = await deleteCart(id);
            if (productDelete.success) {
                toast.success(productDelete.message);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <button onClick={handleDelete} className='hover:text-red-500' type='button'>
                <FaTrash />
            </button>
        </>
    );
};

export default CartDelete;