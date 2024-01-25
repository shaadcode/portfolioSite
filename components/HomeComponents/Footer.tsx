import { contactMe } from '@/constants/constants';
import FooterMenuItem from './FooterMenuItem';

const Footer = () => {
  return (
    <footer
      id="contactMe"
      className="headFooter sectionWidth flexCenter flex-col gap-10 px-5 text-white">
      <div>
        <h3 className="text-4xl font-black">راه های ارتباطیم</h3>
      </div>
      <div className="mb-32 md:mb-16">
        <ul className="flexCenter gap-9">
          {contactMe.map(({ id, title, href }) => (
            <FooterMenuItem key={id} title={title} href={href} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
