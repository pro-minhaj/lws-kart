"use client";
import wishlistDelete from "@/app/server/actions/wishlistdelete";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

const WishlistDelete = ({ id }) => {

    const handleWishlistDelete = async () => {
        try {
            const deleteWishlist = await wishlistDelete(id);
            if (deleteWishlist.success) {
                toast.success(deleteWishlist.message);
            }
            else {
                toast.error(deleteWishlist.message);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <button
                onClick={handleWishlistDelete}
                className='text-gray-600 cursor-pointer hover:text-primary'>
                <FaTrash />
            </button>
        </>
    );
};

export default WishlistDelete;