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

// Table
import Table from "@/components/common/Table";
import { guidesColumns } from "@/lib/utils";

// fetch filtered guides
import { fetchFilteredGuides } from "@/lib/data/fetchGuides";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const guides = await fetchFilteredGuides(query, currentPage);
  // console.log(guides);

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
      {/* Table Start */}
      <Table
        className="mt-10"
        type="edit"
        columns={guidesColumns}
        data={guides}
      />
      {/* Table Stop */}
    </div>
  );
}
