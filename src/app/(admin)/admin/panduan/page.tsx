// Link
import Link from "next/link";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Search
import Search from "@/components/common/Search";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="container">
      {/* Heading 1 */}
      <h1 className="mx-auto text-center">Panduan</h1>
      {/* Breadcrumb Start*/}
      <section className="font-medium mb-10 mt-10 container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/admin"}>
                Dashboard
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-200" />
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/admin"}>
                Panduan
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      {/* Search Start */}
      <section>
        <Search placeholder="Cari panduan..." />
      </section>
      {/* Search Stop */}
    </div>
  );
}
