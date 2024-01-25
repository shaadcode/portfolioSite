import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'seyed mojtaba shadab',
  description: "Seyed Mojtaba Shadab's personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className="bg-mainBg">
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
