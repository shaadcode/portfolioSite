import Image from 'next/image';
import profile from '@/public/coverImg.jpg';
import { adminPanelMenu } from '@/constants/constants';
import AdminPanelMenuItem from './APMenuItem';

const SideBarPanel = () => {
  return (
    <div className="flexCenter flex-col gap-10">
      <div className="flexCenter w-full flex-col gap-5">
        <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            className="object-cover object-center"
            src={profile}
            alt=""
            width={100}
          />
        </div>
        <div className="flexCenter flex-col gap-2 text-nowrap text-sm text-gray-300 hover:text-white">
          <h1 className="font-light">سید مجتبی شاداب</h1>
          <span className="font-semibold">مدیر</span>
        </div>
      </div>
      <div className="text-gray-300 hover:text-white">
        <ul className="flexCenter flex-col gap-10">
          {adminPanelMenu.map((item) => (
            <AdminPanelMenuItem key={item.id} title={item.title} href={item.href} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarPanel;
