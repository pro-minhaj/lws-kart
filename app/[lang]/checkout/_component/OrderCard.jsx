import CartDelete from "./CartDelete";
import OrderQuantity from "./OrderQuantity";

const OrderCard = ({ cart }) => {
    const { _id, name, size, price, quantity } = cart;
    // Total Price and Quantity
    const totalPrice = price * quantity;

    return (
        <div
            className='grid items-center justify-between grid-cols-2'
        >
            <div className=''>
                <h5 className='font-medium text-gray-800'>{name}</h5>
                <p className='text-sm text-gray-600'>Size: {size}</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1.5'>
                    <OrderQuantity id={_id} quantity={quantity} />
                </div>
                <p className='font-medium text-gray-800'>${totalPrice.toFixed(2)}</p>
                <CartDelete />
            </div>
        </div>
    );
};

export default OrderCard;