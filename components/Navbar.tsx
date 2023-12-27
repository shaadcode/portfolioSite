import { navItem } from "@/constants/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-5 z-40 mx-auto bg-transparent px-5">
      <ul className="navbarFont text-white hidden sm:flex items-center justify-center gap-x-7 md:gap-x-14">
        {navItem.map((item) => (
          <li key={item.id} className="font-semibold">
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
