'use client';
import withAuth from '@/utils/withAuth';
import { ComponentType } from 'react';

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default withAuth(DashLayout as ComponentType);
