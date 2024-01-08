import type { Metadata } from 'next';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'seyed mojtaba shadab',
  description: "Seyed Mojtaba Shadab's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className=" bg-mainBg">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
