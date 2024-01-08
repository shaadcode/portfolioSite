import Link from 'next/link';

type Tprops = {
  title: string;
  href: string;
};

const AdminPanelMenuItem = ({ title, href }: Tprops) => {
  return (
    <li className="cursor-pointer border-b-2 border-thirdColor pb-2">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default AdminPanelMenuItem;
