import FormControl from "./FormControl";
import OrderSummary from "./OrderSummary";

const CheckOutForm = ({ cartsData, accountInformation }) => {
    // Form control disabled
    const disabled = cartsData.length > 0 ? false : true;
    const { userProfile, address, cardInformation } = accountInformation;

    const handleOrder = async (formData) => {
        "use server"
        console.log(formData);
    }

    return (
        <form action={handleOrder} className='container grid items-start grid-cols-1 gap-6 pt-4 pb-16 lg:grid-cols-12'>
            <div className='p-4 border border-gray-200 rounded md:col-span-2 lg:col-span-8'>
                <h3 className='mb-4 text-lg font-medium capitalize'>Checkout</h3>
                <div className='space-y-4'>
                    <FormControl
                        defaultValue={userProfile?.name || ""}
                        readOnly={userProfile?.name || ""}
                        disabled={disabled}
                        id='name'
                        label='Full Name'
                        required={true}
                    />
                    <FormControl
                        defaultValue={userProfile?.email || ""}
                        readOnly={userProfile?.email || ""}
                        disabled={disabled}
                        id='email'
                        label='Email address' />
                    <FormControl
                        defaultValue={userProfile?.phone || ""}
                        readOnly={userProfile?.phone || ""}
                        disabled={disabled}
                        id='phone'
                        label='Phone Number'
                    />
                    <FormControl
                        defaultValue={address?.address || ""}
                        disabled={disabled}
                        id='address'
                        label='Address'
                    />
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <FormControl
                            defaultValue={address?.city || ""}
                            disabled={disabled}
                            id='city'
                            label='City'
                        />
                        <FormControl
                            defaultValue={address?.zipCode || ""}
                            disabled={disabled}
                            id='city'
                            label='City'
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <FormControl
                            defaultValue={address?.state || ""}
                            disabled={disabled}
                            id='state'
                            label='State'
                        />
                        <FormControl
                            defaultValue={address?.country || ""}
                            disabled={disabled}
                            id='country'
                            label='Country/Region'
                        />
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <OrderSummary cartsData={cartsData} />
        </form>
    );
};

export default CheckOutForm;