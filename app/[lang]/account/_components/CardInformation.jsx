import { FaEdit } from "react-icons/fa";
import CardInformationAddButton from "./buttons/CardInformationAddButton";

const CardInformation = ({ cardInformation }) => {
    const modifiedCardInformation = {
        email: cardInformation.email,
        holderName: cardInformation.holderName,
        cardNumber: cardInformation.cardNumber,
        cvc: cardInformation.cvc,
    }
    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-medium text-gray-800'>Card Information</h3>
                <CardInformationAddButton cardInformation={cardInformation} name={<FaEdit />} />
            </div>
            <div className='space-y-1'>
                {Object.entries(modifiedCardInformation).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                        {value}
                    </li>
                ))}
            </div>
        </>
    );
};

export default CardInformation;