import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import Link from 'next/link';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import SubmitButton from '@/app/components/SubmitButton/SubmitButton';
import FormControl from './_component/FormControl';

const CheckOutPage = () => {
    return (
        <>
            {/* CheckOut Page Hading */}
            <PageLeftHanding>Checkout</PageLeftHanding>
            {/* CheckOut Page Hading */}

            {/* CheckOut Form */}
            <form className='container grid items-start grid-cols-1 gap-6 pt-4 pb-16 md:grid-cols-3 lg:grid-cols-12'>
                <div className='p-4 border border-gray-200 rounded md:col-span-2 lg:col-span-8'>
                    <h3 className='mb-4 text-lg font-medium capitalize'>Checkout</h3>
                    <div className='space-y-4'>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                            <FormControl id='first-name' label='First Name' required={true} />
                            <FormControl id='last-name' label='Last Name' required={true} />
                        </div>
                        <FormControl id='email' label='Email address' />
                        <FormControl id='phone' label='Phone number' />
                        <FormControl id='company' label='Company' />
                        <FormControl id='region' label='Country/Region' />
                        <FormControl id='address' label='Street address' />
                        <FormControl id='city' label='City' />
                    </div>
                </div>

                <div className='p-4 border border-gray-200 rounded lg:col-span-4'>
                    <h4 className='mb-4 text-lg font-medium text-gray-800 uppercase'>
                        Order Summary
                    </h4>
                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <div>
                                <h5 className='font-medium text-gray-800'>Italian shape sofa</h5>
                                <p className='text-sm text-gray-600'>Size: M</p>
                            </div>
                            <p className='text-gray-600'>x3</p>
                            <p className='font-medium text-gray-800'>$320</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h5 className='font-medium text-gray-800'>Italian shape sofa</h5>
                                <p className='text-sm text-gray-600'>Size: M</p>
                            </div>
                            <p className='text-gray-600'>x3</p>
                            <p className='font-medium text-gray-800'>$320</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h5 className='font-medium text-gray-800'>Italian shape sofa</h5>
                                <p className='text-sm text-gray-600'>Size: M</p>
                            </div>
                            <p className='text-gray-600'>x3</p>
                            <p className='font-medium text-gray-800'>$320</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h5 className='font-medium text-gray-800'>Italian shape sofa</h5>
                                <p className='text-sm text-gray-600'>Size: M</p>
                            </div>
                            <p className='text-gray-600'>x3</p>
                            <p className='font-medium text-gray-800'>$320</p>
                        </div>
                    </div>

                    <div className='flex justify-between py-3 mt-1 font-medium text-gray-800 uppercase border-b border-gray-200'>
                        <p>Subtotal</p>
                        <p>$1280</p>
                    </div>

                    <div className='flex justify-between py-3 mt-1 font-medium text-gray-800 uppercase border-b border-gray-200'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>

                    <div className='flex justify-between py-3 font-medium text-gray-800 uppercase'>
                        <p className='font-semibold'>Total</p>
                        <p>$1280</p>
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
                </div>
            </form>
        </>
    );
};

export default CheckOutPage;
