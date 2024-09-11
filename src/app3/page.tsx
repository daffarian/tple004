import Link from "next/link";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ListChekIcon from "@/components/icons/ListCheckIcon";
import ReceiptIcon from "@/components/icons/ReceiptIcon";
import AwardIcon from "@/components/icons/AwardIcon";
import UserRoundIcon from "@/components/icons/UserIcon";
import BookIcon from "@/components/icons/BookIcon";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div>
      <div className="font-medium mb-10 mt-5 container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-zinc-200" href="/">
                Beranda
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-200" />
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-7 my-5">
        {/* Jadwal Perkuliahan Link */}
        <Link href="/jadwal-perkuliahan">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-red-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <CalendarIcon />
            </span>
            <span>Jadwal Perkuliahan</span>
          </div>
        </Link>

        {/* Info Tugas Link */}
        <Link href="/info-tugas">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-blue-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <ListChekIcon />
            </span>
            <span>Info Tugas</span>
          </div>
        </Link>

        {/* Jadwal Pembelajaran Link */}
        <Link href="/jadwal-pembelajaran">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-green-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <ReceiptIcon />
            </span>
            <span>Jadwal Pembelajaran</span>
          </div>
        </Link>

        {/* Sertifikat Link */}
        <Link href="/sertifikat">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-yellow-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <AwardIcon />
            </span>
            <span>Sertifikat</span>
          </div>
        </Link>

        {/* Panduan Link */}
        <Link href="/panduan">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-teal-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <BookIcon />
            </span>
            <span>Panduan</span>
          </div>
        </Link>

        {/* Kontak Dosen Link */}
        <Link href="/kontak-dosen">
          <div className="w-full h-14 border-[1px] border-zinc-300 hover:border-purple-400 transition-all font-semibold py-3 px-8 flex flex-row items-center rounded-full">
            <span className="mr-5">
              <UserRoundIcon />
            </span>
            <span>Kontak Dosen</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
