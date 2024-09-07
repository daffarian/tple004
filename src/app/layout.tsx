import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileNav from "./components/common/MobileNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beranda",
  description: "Informasi 07TPLE004",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <MobileNav />
        <main className="">
          <div className="w-full h-56 bg-zinc-900 rounded-b-3xl flex fixed top-14 z-[-1] text-textDark justify-center items-center">
            <h1 className="font-bold top-42 absolute mb-14">Informasi kelas 07TPLE004</h1>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
