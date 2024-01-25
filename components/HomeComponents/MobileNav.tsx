import { mobileNavIcon } from '@/constants/constants';
import MobileNavItem from './MobileNavItem';

const MobileNav = () => {
  return (
    <nav className="bg-white-300 fixed bottom-10 z-50 rounded-xl border border-gray-100 bg-opacity-30 bg-clip-padding shadow-3xl backdrop-blur-sm backdrop-filter sm:hidden">
      <ul className="flexCenter w-full gap-10 rounded-lg p-4 text-white shadow-lg">
        {mobileNavIcon.map(({ href, id, src }) => (
          <MobileNavItem key={id} href={href} src={src} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
