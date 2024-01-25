import { navItem } from '@/constants/constants';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="absolute top-5 z-40 mx-auto snap-start bg-transparent px-5">
      <ul className="navbarFont ic-jc hidden gap-x-7 text-white sm:flex md:gap-x-14">
        {navItem.map(({ id, href, title }) => (
          <NavbarItem key={id} href={href} title={title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
