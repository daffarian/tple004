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
import { fetchGuideBySlug } from "@/lib/fetchGuideBySlug";
export default async function Page({ params }: { params: { slug: string } }) {
  const guideBySlug = await fetchGuideBySlug(`${params.slug}`);
  return (
    <div>
      <h1 className="font-bold text-xl fixed w-full text-white left-0 -translate-y-20 z-[-1] flex justify-center items-center text-center top-42">
        {guideBySlug.title}
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
            <BreadcrumbSeparator className="text-zinc-200" />
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/"}>
                {guideBySlug.title}
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      {/* Guid List Start */}
      <section>
        <article
          className="prose !prose-invert !text-md flex flex-col gap-10 border-[1px] border-zinc-700 p-5 rounded-xl"
          dangerouslySetInnerHTML={{ __html: guideBySlug.content }}
        ></article>
      </section>
      {/* Guid List Stop */}
    </div>
  );
}
