import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Whatsapp from "@/components/common/Whatsapp";

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
  title: "Informasi Perkuliahan Semester 7",
  // description: "Informasi 07TPLE004",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-black to-zinc-900`}
      >
        <Header />
        <main className="">
          {/* Hero Background */}

          <div
            style={{ backgroundImage: "url(/images/hero-bg.jpeg" }}
            className="w-full h-44 rounded-b-3xl flex fixed bg-cover bg-bottom top-16 z-[-1] justify-center items-center"
          >
            {/* Filter Hero Background */}
            <div className="absolute w-full h-full bg-gradient-to-t from-black/90 to-black/20 via-black/60"></div>
          </div>
          <div className="pt-56 pb-16">
            <div className="container relative min-h-[35rem] py-5 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
              {/* Page Component */}
              {children}
            </div>
          </div>
          {/* Whatsapp */}
        <Whatsapp className="fixed bottom-10 right-10" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
