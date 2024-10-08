import Author from "./Author";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className="!z-20 fixed top-0 w-full bg-zinc-900 py-4 border-b-[1px] border-zinc-700">
      <div className="container flex flex-row justify-between items-center">
        {/* Author */}
        <Author />
        {/* Modbile Nav */}
        <MobileNav />
      </div>
    </header>
  );
}
