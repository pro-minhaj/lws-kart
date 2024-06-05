import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import Profile from './_components/Profile';
import Address from './_components/Address';
import CardInformation from './_components/CardInformation';
import ProfileAddButton from './_components/buttons/ProfileAddButton';
import AddressAddButton from './_components/buttons/AddressAddButton';
import CardInformationAddButton from './_components/buttons/CardInformationAddButton';
import getAccountInformation from '@/app/server/getData/getAccountInformation';
import OrderInformation from './_components/OrderInformation';

const AccountPage = async () => {
    const accountInformationReq = await getAccountInformation();
    const { userProfile, address, cardInformation } = JSON.parse(accountInformationReq);

    return (
        <div>
            {/* Page Hading */}
            <PageLeftHanding>Account</PageLeftHanding>
            {/* Page Hading */}
            {/* Page Content */}
            <div className='container items-start gap-6 py-10 md:pt-10 md:pb-20'>
                {/* info */}
                <div className='grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-3'>
                    <div className='p-5 bg-white rounded shadow'>
                        {userProfile ? (
                            <Profile profile={userProfile} />
                        ) : (
                            <div>
                                <h3 className='mb-4 text-lg font-medium text-gray-800'>
                                    Personal Profile
                                </h3>
                                <ProfileAddButton name='Add Profile Information' />
                            </div>
                        )}
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        {address ? (
                            <Address address={address} />
                        ) : (
                            <div>
                                <h3 className='mb-4 text-lg font-medium text-gray-800'>
                                    Shipping address
                                </h3>
                                <AddressAddButton address={address} name='Add Shipping Address' />
                            </div>
                        )}
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        {cardInformation ? (
                            <CardInformation cardInformation={cardInformation} />
                        ) : (
                            <div>
                                <h3 className='mb-4 text-lg font-medium text-gray-800'>
                                    Card Information
                                </h3>
                                <CardInformationAddButton name='Add Card Information' />
                            </div>
                        )}
                    </div>
                </div>
                {/* ./info */}

                {/* Order info */}
                <OrderInformation />
            </div>
        </div>
    );
};

export default AccountPage;
