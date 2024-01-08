import { navItem } from '@/constants/constants';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-5 z-40 mx-auto snap-start bg-transparent px-5">
      <ul className="navbarFont hidden items-center justify-center gap-x-7 text-white sm:flex md:gap-x-14">
        {navItem.map((item, index) => (
          <li key={item.id} className="font-semibold">
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
