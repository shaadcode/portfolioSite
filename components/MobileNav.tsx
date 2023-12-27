import { mobileNavIcon } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="fixed z-50 bottom-10 shadow-3xl sm:hidden">
      <ul className="text-white flex justify-center items-center gap-10 w-full bg-white p-4 rounded-lg shadow-lg">
        {mobileNavIcon.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              <Image src={item.src} alt={item.src} width={20} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
