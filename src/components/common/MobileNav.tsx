"use client";
import Particle from "./Particles";
import clsx from "clsx";
import { useState } from "react";
export default function MobileNav() {
  const [isOpenNav, setIsOpenNav] = useState<Boolean>(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className={clsx(
          "flex items-center justify-center w-8 h-8 p-2 rounded-full",
          "z-30"
        )}
        onClick={() => setIsOpenNav(!isOpenNav)}
      >
        <span
          className={clsx(
            "flex text-zinc-200 items-center justify-center text-center align-middle"
          )}
        >
          {isOpenNav === false ? (
            <div className="flex flex-row gap-1 items-center justify-center">
              <span className="w-[2px] h-[2px] rounded-full bg-white "></span>
              <span className="w-[2px] h-[2px] rounded-full bg-white "></span>
              <span className="w-[2px] h-[2px] rounded-full bg-white "></span>
            </div>
          ) : (
            "X"
          )}
        </span>
      </button>
      <nav
        className={clsx(
          "bg-zinc-800 shadow-3xl shadow-white ring-1 ring-zinc-900 !z-20 transition-all",
          {
            "w-full h-full rounded-bl-full !z-20 duration-1000 opacity-100 fixed top-0 right-0":
              isOpenNav,
            "w-1 h-1 fixed duration-500 delay-200 -top-5 -right-5": !isOpenNav,
          }
        )}
        onClick={() => setIsOpenNav(!isOpenNav)}
      >
        {isOpenNav === true ? <Particle /> : ""}
      </nav>
    </div>
  );
}
