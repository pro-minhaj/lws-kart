import OrderCard from "./OrderCard";
import CheckBox from "./CheckBox";
import { Flex } from "@radix-ui/themes";
import FormControl from "./FormControl";

const OrderSummary = ({ cartsData, totalPrice, cardInformation, error }) => {
    const { subTotal, shippingCost, tax, totalAmount } = totalPrice;

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

                        <div className="mt-2 border-t border-gray-200">
                            <h2 className="my-2 text-lg font-semibold ">
                                Card Information
                            </h2>
                            <Flex direction="column" gap="3">
                                <FormControl
                                    className="!py-1.5"
                                    defaultValue={cardInformation?.holderName || ""}
                                    readOnly={cardInformation?.holderName || ""}
                                    error={error?.holderName}
                                    id='holderName'
                                    label='Holder Name'
                                >
                                    {
                                        error && error?.holderName?.map((n, i) => <p className='text-red-500' key={i}>
                                            <small>
                                                {n}
                                            </small>
                                        </p>)
                                    }
                                </FormControl>
                                <FormControl
                                    className="!py-1.5"
                                    defaultValue={cardInformation?.cardNumber || ""}
                                    readOnly={cardInformation?.cardNumber || ""}
                                    label="Card Number"
                                    type="number"
                                    id="cardNumber">
                                    {
                                        error && error?.cardNumber?.map((n, i) => <p className='text-red-500' key={i}>
                                            <small>
                                                {n}
                                            </small>
                                        </p>)
                                    }
                                </FormControl>
                                <FormControl
                                    className="!py-1.5"
                                    defaultValue={cardInformation?.cvc || ""}
                                    readOnly={cardInformation?.cvc || ""}
                                    label="Card CVC"
                                    type="number"
                                    id="cvc">
                                    {
                                        error && error?.cvc?.map((n, i) => <p className='text-red-500' key={i}>
                                            <small>
                                                {n}
                                            </small>
                                        </p>)
                                    }
                                </FormControl>
                            </Flex>
                        </div>
                        <>
                            <CheckBox />
                        </>
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