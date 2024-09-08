// Link
import Link from "next/link";

// Icons
import CalendarIcon from "@/components/icons/CalendarIcon";
import ListChekIcon from "@/components/icons/ListCheckIcon";
import ReceiptIcon from "@/components/icons/ReceiptIcon";
import AwardIcon from "@/components/icons/AwardIcon";
import UserRoundIcon from "@/components/icons/UserIcon";
import BookIcon from "@/components/icons/BookIcon";

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
    <section className="pt-56 pb-16">
      <div className="container relative py-5 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
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
        <div className="flex flex-col gap-7 my-5">

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-red-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <CalendarIcon />
            </span>{" "}
            <span>Jadwal Perkuliahan</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-blue-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ListChekIcon />
            </span>{" "}
            <span>Info Tugas</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-green-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ReceiptIcon />
            </span>{" "}
            <span>Jadwal Pembayaran</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-yellow-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <AwardIcon />
            </span>{" "}
            <span>Sertifikat</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-teal-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <BookIcon />
            </span>{" "}
            <span>Panduan</span>
          </div>

          <div className=" w-full h-14 border-[1px] border-zinc-300 hover:border-purple-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
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
