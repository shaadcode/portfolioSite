'use client';
import Image from 'next/image';
import profile from '@/public/coverImg.jpg';
import { adminPanelMenu } from '@/constants/constants';
import AdminPanelMenuItem from '@/components/admin-panel/APMenuItem';
import { useState } from 'react';
import ChatInDash from '@/components/admin-panel/ChatInDash';

const PanelAdmin = () => {
  const [test, setTest] = useState(5);
  return (
    <main className="min-w-screen adminPanel flex min-h-screen items-start justify-center">
      <div className="flex h-full w-1/4 flex-col items-center justify-center gap-16 ">
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-5">
          <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
            <Image
              className="object-cover object-center"
              src={profile}
              alt=""
              width={100}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-white">
            <h1 className="font-light">سید مجتبی شاداب</h1>
            <span className="font-semibold">مدیر</span>
          </div>
        </div>
        <div className="text-gray-300 hover:text-white">
          <ul className="flex flex-col items-center justify-center gap-10">
            {adminPanelMenu.map((item) => (
              <AdminPanelMenuItem
                key={item.id}
                title={item.title}
                href={item.href}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 flex h-full w-3/4 flex-col items-center justify-center gap-14 text-sm text-white">
        <div className="flex items-center justify-center gap-24">
          <div className="flex items-center justify-between gap-16 rounded-xl border-2 border-thirdColor bg-secColor px-7 py-5 transition-colors hover:border-slate-500">
            <div className="">
              <p className="font-light">
                شما به تعداد
                <span className="font-semibold"> {test} </span>
                پیام جدید دارید!
              </p>
            </div>
            <div>
              <button>بروزرسانی</button>
            </div>
          </div>
          <div className="rounded-xl border-2 border-thirdColor bg-secColor px-7 py-5 transition-colors hover:border-slate-500">
            <p className="font-light">
              تعداد
              <span className="font-semibold"> {test} </span>
              نمونه کار با موفقیت ثبت شد!
            </p>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <ChatInDash />
        </div>
      </div>
    </main>
  );
};

export default PanelAdmin;
