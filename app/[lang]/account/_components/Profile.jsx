import { FaEdit } from "react-icons/fa";
import ProfileAddButton from "./buttons/ProfileAddButton";

const Profile = ({ profile }) => {
    const { name, phone, email } = profile;
    const modifiedProfile = {
        name: name,
        phone: phone,
        email: email
    }
    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-medium text-gray-800'>Personal Profile</h3>
                <ProfileAddButton profile={profile} name={<FaEdit />} />
            </div>
            <div className='space-y-1'>
                {Object.entries(modifiedProfile).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                        {value}
                    </li>
                ))}
            </div>
        </>
    );
};

export default Profile;