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
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-xl fixed w-full text-white left-0 -translate-y-20 z-[-1] flex justify-center items-center text-center top-42">
        Informasi Perkuliahan Semester 7
      </h1>
      {/* Breadcrumb Start*/}
      <section className="font-medium mb-10 mt-5 container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-white" href={"/"}>
                Beranda
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      {/* Breadcrumb Stop */}
      <section className="flex flex-col gap-7 my-5 text-white">
        <Link href={"/jadwal-kuliah"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-red-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <CalendarIcon />
            </span>{" "}
            <span>Jadwal Perkuliahan</span>
          </div>
        </Link>

        <Link href={"/in-process"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-blue-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ListChekIcon />
            </span>{" "}
            <span>Info Tugas</span>
          </div>
        </Link>

        <Link href={"/in-process"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-green-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <ReceiptIcon />
            </span>{" "}
            <span>Jadwal Pembayaran</span>
          </div>
        </Link>

        <Link href={"/in-process"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-yellow-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <AwardIcon />
            </span>{" "}
            <span>Sertifikat</span>
          </div>
        </Link>

        <Link href={"/panduan"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-teal-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <BookIcon />
            </span>{" "}
            <span>Panduan</span>
          </div>
        </Link>

        <Link href={"/in-process"}>
          <div className=" w-full h-14 border-[1px] border-zinc-700 hover:border-purple-400 transition-all font-semibold py-3 px-8 flex flex-row  items-center rounded-full">
            <span className="mr-5">
              <UserRoundIcon />
            </span>{" "}
            <span>Kontak Dosen</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
