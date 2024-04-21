import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flybondi Challenge",
  description: "Coded by Facundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="flex items-center justify-center text-white h-20">
          With 💖 by Facundo
        </footer>
      </body>
    </html>
  );
}
