import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Sertifikat() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="font-medium mb-10 mt-5 container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link className="text-zinc-200" href="/">
                Beranda
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-zinc-200" />
            <BreadcrumbItem>
              <span className="text-zinc-200">Sertifikat</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="container">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">Sertifikat</h1>

        <div className="space-y-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Sertifikat Kompetensi Web Development
            </h2>
            <p className="text-zinc-300 mb-2">
              Diterbitkan oleh: Badan Nasional Sertifikasi Profesi
            </p>
            <Link href="#" className="text-blue-400 hover:underline">
              Lihat Sertifikat
            </Link>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Sertifikat Keahlian Jaringan Komputer
            </h2>
            <p className="text-zinc-300 mb-2">
              Diterbitkan oleh: Cisco Networking Academy
            </p>
            <Link href="#" className="text-blue-400 hover:underline">
              Lihat Sertifikat
            </Link>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Sertifikat Kursus Online Machine Learning
            </h2>
            <p className="text-zinc-300 mb-2">Diterbitkan oleh: Coursera</p>
            <Link href="#" className="text-blue-400 hover:underline">
              Lihat Sertifikat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
