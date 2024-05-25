import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import { FaEdit } from 'react-icons/fa';

const AccountPage = () => {
    return (
        <div>
            {/* Page Hading */}
            <PageLeftHanding>Account</PageLeftHanding>
            {/* Page Hading */}
            {/* Page Content */}
            <div className='container items-start gap-6 pt-4 pb-16'>
                {/* info */}
                <div className='grid max-w-5xl grid-cols-3 gap-4 mx-auto'>
                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-lg font-medium text-gray-800'>Personal Profile</h3>
                            <button className='text-primary'>
                                <FaEdit />
                            </button>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-medium text-gray-700'>John Doe</h4>
                            <p className='text-gray-800'>example@mail.com</p>
                            <p className='text-gray-800'>0811 8877 988</p>
                        </div>
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-lg font-medium text-gray-800'>Shipping address</h3>
                            <button className='text-primary'>
                                <FaEdit />
                            </button>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-medium text-gray-700'>John Doe</h4>
                            <p className='text-gray-800'>Medan, North Sumatera</p>
                            <p className='text-gray-800'>20371</p>
                            <p className='text-gray-800'>0811 8877 988</p>
                        </div>
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-lg font-medium text-gray-800'>Billing address</h3>
                            <button className='text-primary'>
                                <FaEdit />
                            </button>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-medium text-gray-700'>John Doe</h4>
                            <p className='text-gray-800'>Medan, North Sumatera</p>
                            <p className='text-gray-800'>20317</p>
                            <p className='text-gray-800'>0811 8877 988</p>
                        </div>
                    </div>
                </div>
                {/* ./info */}
            </div>
        </div>
    );
};

export default AccountPage;
