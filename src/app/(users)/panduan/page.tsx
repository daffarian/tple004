// Link
import Link from "next/link";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// fetch guides
import { fetchGuides } from "@/lib/data/fetchGuides";

// meta data
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Panduan",
  // description: "Informasi 07TPLE004",
};

export default async function Page() {
  const guides = await fetchGuides();
  return (
    <div>
      <h1 className="font-bold text-xl fixed w-full text-white left-0 -translate-y-20 z-[-1] flex justify-center items-center text-center top-42">
        Panduan
      </h1>
      {/* Breadcrumb Start*/}
      <section className="font-medium mb-10 mt-5 container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/"}>
                Beranda
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-200" />
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/panduan"}>
                Panduan
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      {/* Guid List Start */}
      <section>
        <div className="flex flex-col gap-5">
          {guides && guides.length > 0 ? (
            guides.map((value, index) => (
              <Link key={index} href={`/panduan/${value.slug}`}>
                <div className="flex flex-row justify-between items-center gap-3 border-[1px] border-zinc-700 w-full h-16 p-3 rounded-xl hover:bg-zinc-800 transition">
                  <h2 className="">{value.title}</h2>
                  <p className="text-sm !font-thin">
                    {new Date(value.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-col w-full h-[20rem] items-center justify-center">
              <p>Data tidak ditemukan</p>
            </div>
          )}
        </div>
      </section>
      {/* Guid List Stop */}
    </div>
  );
}
