'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SideBarPanel, AnimationPattern } from '@/constants/ShortImport';

const AdminPage = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const [getkey, setkey] = useState<string | null>();

  useEffect(() => {
    if (localStorage !== undefined) {
      setkey(localStorage.getItem('accessKey'));
    }
    function validateAdmin() {
      if (getkey === null) {
        route.replace('/login');
      }
    }
    validateAdmin();
  }, [getkey, route]);
  return (
    <>
      <section className="min-w-screen adminPanel flexCenter absolute z-10 min-h-screen w-full flex-col bg-mainBg lg:flex-row lg:items-start">
        <aside className="flexCenter mt-14 h-full w-1/4 flex-col gap-16 ">
          <SideBarPanel />
        </aside>
        <main className="flexCenter mt-14 h-full w-3/4 flex-col gap-8 text-sm text-white md:px-8 lg:gap-14 lg:px-14">
          <>{children}</>
        </main>
        <AnimationPattern />
      </section>
    </>
  );
};

export default AdminPage;
