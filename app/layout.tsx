import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "seyed mojtaba shadab",
  description: "Seyed Mojtaba Shadab's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className=" bg-[#0A101D]">{children}</body>
    </html>
  );
}
