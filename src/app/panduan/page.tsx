// Link
import Link from "next/link";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Guide Data Here
import { panduan } from "@/data/panduan";
import { div } from "framer-motion/client";

export default function Page() {
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
              <Link className="text-zinc-200" href={"/"}>
                Panduan
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-200" />
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      {/* Guid List Start */}
      <section>
        <div className="flex flex-col gap-10">
          {panduan.map((value) => (
            <Link href={`/panduan/${value.slug}`}>
              <div className="flex flex-col gap-5 border-[1px] w-full h-28 p-5 rounded-xl">
                <h2>{value.title}</h2>
                <p className="text-sm">{value.date.toDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Guid List Stop */}
    </div>
  );
}
