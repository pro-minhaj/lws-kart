import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import Link from "next/link";
import OrderQuantity from "./OrderQuantity";
import CartDelete from "./CartDelete";
import OrderCard from "./OrderCard";

const OrderSummary = ({ cartsData }) => {
    console.log(cartsData);
    // Total Price 
    const subTotal = cartsData.reduce(
        (acc, { carts }) => acc + carts.price * carts.quantity,
        0
    );
    // Shipping Cost
    const shippingCost = subTotal > 1000 ? 100 : 0;
    // Tax
    const tax = (subTotal + shippingCost) * 0.1;
    // Total Amount
    const totalAmount = subTotal + shippingCost + tax;

    return (
        <div className='p-4 border border-gray-200 rounded lg:col-span-4'>
            {
                cartsData.length > 0 ? (
                    <>
                        <h4 className='mb-4 text-lg font-medium text-gray-800 uppercase'>
                            Order Summary
                        </h4>
                        <div className='space-y-2'>
                            {cartsData.map((cart) => (
                                <OrderCard key={cart?._id} cart={cart?.carts} />
                            ))}
                        </div>

                        <div className='flex justify-between py-3 mt-1 font-medium text-gray-800 uppercase border-b border-gray-200'>
                            <p>Subtotal</p>
                            <p>${subTotal.toFixed(2)}</p>
                        </div>

                        <div className='flex justify-between py-3 mt-1 font-medium text-gray-800 uppercase border-b border-gray-200'>
                            <p>Shipping</p>
                            <p>${shippingCost}</p>
                        </div>
                        <div className='flex justify-between py-3 mt-1 font-medium text-gray-800 uppercase border-b border-gray-200'>
                            <p>Tax</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>

                        <div className='flex justify-between py-3 font-medium text-gray-800 uppercase'>
                            <p className='font-semibold'>Total</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>

                        <div className='flex items-center mt-2 mb-4'>
                            <input
                                type='checkbox'
                                name='agreement'
                                id='agreement'
                                className='w-3 h-3 rounded-sm cursor-pointer text-primary focus:ring-0'
                            />
                            <label
                                htmlFor='agreement'
                                className='ml-3 text-sm text-gray-600 cursor-pointer'
                            >
                                I agree to the{' '}
                                <Link className='text-primary' href='#'>
                                    terms & conditions
                                </Link>
                            </label>
                        </div>
                        <SubmitButton>Place order</SubmitButton>
                    </>
                ) : (
                    <div className="my-5">
                        <h2 className='text-xl font-medium text-center'>No Carts Product</h2>
                    </div>
                )
            }
        </div>
    );
};

export default OrderSummary;