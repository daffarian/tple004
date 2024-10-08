// Link
import Link from "next/link";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="container">
      <h1 className="mx-auto text-center">Dashboard</h1>
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
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      <section className="mt-16">
        <Link
          href={"/admin/panduan"}
          className="px-3 py-2 rouned-lg border-[1px] hover:bg-zinc-800 border-zinc-700"
        >
          Panduan
        </Link>
      </section>
    </div>
  );
}
