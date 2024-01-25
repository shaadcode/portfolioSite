import { TmenuItemInPanel } from '@/constants/types';
import Link from 'next/link';

const AdminPanelMenuItem = ({ title, href }: TmenuItemInPanel) => {
  return (
    <li className="cursor-pointer border-b-2 border-thirdColor pb-2">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default AdminPanelMenuItem;
