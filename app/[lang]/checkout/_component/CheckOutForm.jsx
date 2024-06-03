import FormControl from "./FormControl";
import OrderSummary from "./OrderSummary";

const CheckOutForm = ({ cartsData }) => {
    // Form control disabled
    const disabled = cartsData.length > 0 ? false : true;

    const handleOrder = async (formData) => {
        "use server"
        console.log(formData);
    }

    return (
        <form action={handleOrder} className='container grid items-start grid-cols-1 gap-6 pt-4 pb-16 lg:grid-cols-12'>
            <div className='p-4 border border-gray-200 rounded md:col-span-2 lg:col-span-8'>
                <h3 className='mb-4 text-lg font-medium capitalize'>Checkout</h3>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                        <FormControl
                            disabled={disabled}
                            id='first-name'
                            label='First Name'
                            required={true}
                        />
                        <FormControl
                            disabled={disabled}
                            id='last-name'
                            label='Last Name'
                            required={true}
                        />
                    </div>
                    <FormControl disabled={disabled} id='email' label='Email address' />
                    <FormControl disabled={disabled} id='phone' label='Phone number' />
                    <FormControl disabled={disabled} id='company' label='Company' />
                    <FormControl disabled={disabled} id='region' label='Country/Region' />
                    <FormControl disabled={disabled} id='address' label='Street address' />
                    <FormControl disabled={disabled} id='city' label='City' />
                </div>
            </div>

            {/* Order Summary */}
            <OrderSummary cartsData={cartsData} />
        </form>
    );
};

export default CheckOutForm;