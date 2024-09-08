// Link
import Link from "next/link";

// Icons
import CalendarIcon from "@/components/icons/CalendarIcon";
import ListChekIcon from "@/components/icons/ListCheckIcon";
import ReceiptIcon from "@/components/icons/ReceiptIcon";
import AwardIcon from "@/components/icons/AwardIcon";
import UserRoundIcon from "@/components/icons/UserIcon";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <section className="pt-56">
      <div className="container h-[30rem] relative py-5 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
        {/* Breadcrumb Start*/}
        <div className="font-medium mb-10 mt-5 container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link className="text-zinc-200" href={"/"}>
                  Beranda
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-zinc-200" />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Breadcrumb Stop */}
        <div className="flex flex-col gap-4 mt-5">
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <CalendarIcon />
            </span>{" "}
            <span>Jadwal Perkuliahan</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ListChekIcon />
            </span>{" "}
            <span>Info Tugas</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ReceiptIcon />
            </span>{" "}
            <span>Jadwal Pembayaran</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <AwardIcon />
            </span>{" "}
            <span>Sertifikat</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <UserRoundIcon />
            </span>{" "}
            <span>Kontak Dosen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
