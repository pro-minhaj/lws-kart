import Link from 'next/link';
import { FaChevronRight, FaHouse } from 'react-icons/fa6';

const PageLeftHanding = ({ children }) => {
    return (
        <div className='container flex items-center gap-3 py-4'>
            <Link className='text-base text-primary' href='/'>
                <FaHouse />
            </Link>
            <span className='text-sm text-gray-400'>
                <FaChevronRight />
            </span>
            <p className='font-medium text-gray-600'>{children}</p>
        </div>
    );
};

export default PageLeftHanding;