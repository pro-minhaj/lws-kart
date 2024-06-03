"use client";
import FormControl from "./FormControl";
import OrderSummary from "./OrderSummary";
import { toast } from "sonner";
import orderFormAction from "@/app/server/actions/checkout/orderFormAction";
import { useState } from "react";

const CheckOutForm = ({ cartsData, accountInformation, user }) => {
    const [error, setError] = useState(null);
    // Form control disabled
    const disabled = cartsData.length > 0 ? false : true;
    const { userProfile, address, cardInformation } = accountInformation;

    const handleOrder = async (formData) => {
        setError(null);
        try {
            const order = await orderFormAction(formData);
            if (order?.errors) {
                setError(order.errors)
                return;
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form action={handleOrder} className='container grid items-start grid-cols-1 gap-6 pt-4 pb-16 lg:grid-cols-12'>
            <div className='p-4 border border-gray-200 rounded md:col-span-2 lg:col-span-8'>
                <h3 className='mb-4 text-lg font-medium capitalize'>Checkout</h3>
                <div className='space-y-4'>
                    <FormControl
                        defaultValue={userProfile?.name || user?.name || ""}
                        readOnly={userProfile?.name || user?.name || ""}
                        error={error?.name}
                        disabled={disabled}
                        id='name'
                        label='Full Name'
                        required={true}
                    >
                        {
                            error && error?.name?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>
                    <FormControl
                        defaultValue={userProfile?.email || user?.email || ""}
                        readOnly={userProfile?.email || user?.email || ""}
                        error={error?.email}
                        disabled={disabled}
                        id='email'
                        label='Email address' >
                        {
                            error && error?.email?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>
                    <FormControl
                        defaultValue={userProfile?.phone || ""}
                        readOnly={userProfile?.phone || ""}
                        error={error?.phone}
                        disabled={disabled}
                        id='phone'
                        label='Phone Number'
                    >
                        {
                            error && error?.phone?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>
                    <FormControl
                        defaultValue={address?.address || ""}
                        error={error?.address}
                        disabled={disabled}
                        id='address'
                        label='Address'
                    >
                        {
                            error && error?.address?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <FormControl
                            defaultValue={address?.city || ""}
                            error={error?.city}
                            disabled={disabled}
                            id='city'
                            label='City'
                        >
                            {
                                error && error?.city?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                        <FormControl
                            defaultValue={address?.zipCode || ""}
                            error={error?.zipCode}
                            disabled={disabled}
                            id='zipCode'
                            label='Zip Code'
                        >
                            {
                                error && error?.zipCode?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <FormControl
                            defaultValue={address?.state || ""}
                            error={error?.state}
                            disabled={disabled}
                            id='state'
                            label='State'
                        >
                            {
                                error && error?.state?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                        <FormControl
                            defaultValue={address?.country || ""}
                            error={error?.country}
                            disabled={disabled}
                            id='country'
                            label='Country/Region'
                        >
                            {
                                error && error?.country?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <OrderSummary cartsData={cartsData} />
        </form>
    );
};

export default CheckOutForm;