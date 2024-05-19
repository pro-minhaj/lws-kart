import Image from 'next/image';
import deliveryVanIcon from '@/assets/images/icons/delivery-van.svg';
import moneyBackIcon from '@/assets/images/icons/money-back.svg';
import serviceHoursIcon from '@/assets/images/icons/service-hours.svg';

// All Features Items
const allFeaturesItems = [
    {
        title: "Free Shipping",
        description: "Order over $200",
        iconImg: deliveryVanIcon,
    },
    {
        title: "Money Returns",
        description: "30 days money returns",
        iconImg: moneyBackIcon,
    },
    {
        title: "24/7 Support",
        description: "Customer support",
        iconImg: serviceHoursIcon,
    },
]

const Features = () => {
    return (
        <div className="container py-10 md:py-16">
            <div className="grid justify-center w-10/12 grid-cols-1 gap-6 mx-auto md:grid-cols-3">
                {/* All Features Items */}
                {
                    allFeaturesItems.map((item, index) => <div key={index} className="flex flex-wrap items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
                        <Image src={item.iconImg} alt="Delivery" className="object-contain w-12 h-12" width={48} height={48} />
                        <div>
                            <h4 className="text-lg font-medium capitalize">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
