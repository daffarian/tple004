import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-black to-zinc-900`}
      >
        <Header />
        <main className="">
          <div
            style={{ backgroundImage: "url(/images/hero-bg.jpeg" }}
            className="w-full h-44 rounded-b-3xl flex fixed bg-cover bg-bottom top-16 z-[-1] justify-center items-center"
          >
            <div className="absolute w-full h-full bg-gradient-to-t from-black/90 to-black/20 via-black/60"></div>
            
          </div>
          <section className="pt-56 pb-16">
            <div className="container relative py-5 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
              {children}
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
