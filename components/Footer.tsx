import { contactMe } from "@/constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-16 max-w-[1140px] mx-auto px-5 text-white gap-10 flex items-center justify-center flex-col headFooter">
      <div>
        <h3 className="font-black text-4xl">راه های ارتباطیم</h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-9">
          {contactMe.map((item) => (
            <li key={item.id} className="text-lg font-light">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
