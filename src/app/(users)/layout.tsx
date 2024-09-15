export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      {/* Hero Background */}
      <div
        style={{ backgroundImage: "url(/images/hero-bg.jpeg" }}
        className="w-full h-48 z-[-1] rounded-b-3xl flex fixed bg-cover bg-bottom top-16 justify-center items-center"
      >
        {/* Filter Hero Background */}
        <div className="absolute w-full h-full bg-gradient-to-t from-black/90 to-black/20 via-black/60"></div>
      </div>
      <div className="">
        <div className="container min-h-[35rem] py-5 mt-56 mb-14 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
          {children}
        </div>
      </div>
    </main>
  );
}
