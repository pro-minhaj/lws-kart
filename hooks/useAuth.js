'use client';
import { useSession } from 'next-auth/react';

const useAuth = () => {
    const { data, status } = useSession();
    return { data: data?.user, status };
};

export default useAuth;
