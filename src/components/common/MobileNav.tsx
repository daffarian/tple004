"use client";
import clsx from "clsx";
import { useState } from "react";
export default function MobileNav() {
  const [isOpenNav, setIsOpenNav] = useState<Boolean>(false);
  return (
    <header className="container fixed bg-zinc-900 py-4 flex flex-row justify-between items-center">
      <span className="bg-clip-text !z-30 bg-gradient-to-r from-red-500  to-blue-500 via-purple-500 text-transparent font-bold">07TPLE004</span>
      <div className="relative flex justify-center items-center">
        <button
          className={clsx(
            "flex items-center justify-center w-8 h-8 p-2 rounded-full",
            "z-30"
          )}
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          <span className={clsx("flex text-zinc-200 items-center justify-center text-center align-middle")}>
            {isOpenNav === false ? "..." : "X"}
          </span>
        </button>
        <nav
          className={clsx("bg-black shadow-3xl shadow-white ring-1 ring-zinc-900 !z-20 transition-all", {
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
