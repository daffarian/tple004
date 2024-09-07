"use client";
import clsx from "clsx";
import { useState } from "react";
export default function MobileNav() {
  const [isOpenNav, setIsOpenNav] = useState<Boolean>(false);
  return (
    <header className="container fixed bg-zinc-900 py-4 flex flex-row justify-between items-center">
      <span className="text-textDark font-bold">07TPLE004</span>
      <div className="relative flex justify-center items-center">
        <button
          className={clsx(
            "flex items-center justify-center w-8 h-8 p-2 rounded-full",
            "z-30"
          )}
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          <span className={clsx("flex text-textDark items-center justify-center text-center align-middle", {'text-textWhite': isOpenNav})}>
            {isOpenNav === false ? "..." : "X"}
          </span>
        </button>
        <nav
          className={clsx("bg-black shadow-2xl !z-20 transition-all", {
            "w-full h-5/6 rounded-bl-full !z-20 duration-1000 opacity-100 fixed top-0 right-0":
              isOpenNav,
            "w-1 h-1 fixed duration-500 delay-200 -top-5 -right-5": !isOpenNav,
          })}
          onClick={() => setIsOpenNav(!isOpenNav)}
        ></nav>
      </div>
    </header>
  );
}
