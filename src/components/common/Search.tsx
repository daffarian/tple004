"use client";

//search icon
import SearchIcon from "../icons/SearchIcon";

// search param
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// debounce
import { useDebouncedCallback } from "use-debounce";

// State
import { useState, useCallback } from "react";

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-xl bg-zinc-800 py-[9px] focus:outline-none px-10 text-sm placeholder:text-zinc-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon
        className={
          "absolute text-zinc-500 left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2"
        }
      />
    </div>
  );
}
