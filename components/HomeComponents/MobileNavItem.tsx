import { TmobileNavItemProps } from '@/constants/types';
import Image from 'next/image';
import Link from 'next/link';

const MobileNavItem = ({ href, src }: TmobileNavItemProps) => {
  return (
    <li className="rounded-full bg-white p-2">
      <Link href={href}>
        <Image src={src} alt={src} width={20} />
      </Link>
    </li>
  );
};

export default MobileNavItem;
