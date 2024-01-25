import { TfooterMenuItemProps } from '@/constants/types';
import Link from 'next/link';

const FooterMenuItem = ({ title, href }: TfooterMenuItemProps) => {
  return (
    <li className="text-lg font-light">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default FooterMenuItem;
