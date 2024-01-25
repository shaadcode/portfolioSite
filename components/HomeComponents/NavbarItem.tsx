import { TnavbarItemProps } from '@/constants/types';
import Link from 'next/link';

const NavbarItem = ({ href, title }: TnavbarItemProps) => {
  return (
    <li className="font-semibold">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavbarItem;
