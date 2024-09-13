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
import { fetchGuides } from "@/lib/fetchGuides";

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
        <div className="flex flex-col gap-10">
          {guides && guides.length > 0 ? (
            guides.map((value, index) => (
              <Link key={index} href={`/panduan/${value.slug}`}>
                <div className="flex flex-col gap-5 border-[1px] w-full h-28 p-5 rounded-xl">
                  <h2>{value.title}</h2>
                  <p className="text-sm">
                    {new Date(value.date).toDateString()}
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
