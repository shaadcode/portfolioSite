import { contactMe } from '@/constants/constants';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id="contactMe"
      className="headFooter mx-auto mb-16 flex max-w-[1140px] flex-col items-center justify-center gap-10 px-5 text-white">
      <div>
        <h3 className="text-4xl font-black">راه های ارتباطیم</h3>
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
