'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isLoggedIn } from './authService';
import Hello from '@/components/HomeComponents/Hello';
import Login from '@/components/admin-panel/Login';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn()) {
        router.replace('/shaadcodePanel/login'); // Redirect to login page if not logged in
      }
    }, [isLoggedIn()]);

    return isLoggedIn() ? <WrappedComponent {...props} /> : <Login />;
  };

  return Wrapper;
};

export default withAuth;
