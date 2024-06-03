import PageLeftHanding from '@/app/components/Shared/PageLeftHading/PageLeftHanding';
import Profile from './_components/Profile';
import Address from './_components/Address';
import CardInformation from './_components/CardInformation';
import ProfileAddButton from './_components/buttons/ProfileAddButton';
import AddressAddButton from './_components/buttons/AddressAddButton';
import CardInformationAddButton from './_components/buttons/CardInformationAddButton';

const AccountPage = () => {
    return (
        <div>
            {/* Page Hading */}
            <PageLeftHanding>Account</PageLeftHanding>
            {/* Page Hading */}
            {/* Page Content */}
            <div className='container items-start gap-6 pt-4 pb-16'>
                {/* info */}
                <div className='grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-3'>
                    <div className='p-5 bg-white rounded shadow'>
                        <ProfileAddButton />
                        <Profile />
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        <AddressAddButton />
                        <Address />
                    </div>

                    <div className='px-4 pt-6 pb-8 bg-white rounded shadow'>
                        <CardInformationAddButton />
                        <CardInformation />
                    </div>
                </div>
                {/* ./info */}
            </div>
        </div>
    );
};

export default AccountPage;
