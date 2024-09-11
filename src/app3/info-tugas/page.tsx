import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function InfoTugas() {
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
              <span className="text-zinc-200">Info Tugas</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="container">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">Info Tugas</h1>

        <div className="space-y-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Pemrograman Web Lanjut
            </h2>
            <p className="text-zinc-300 mb-2">
              Membuat aplikasi web dengan React dan Next.js
            </p>
            <p className="text-zinc-400">Deadline: 30 April 2024</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Keamanan Jaringan
            </h2>
            <p className="text-zinc-300 mb-2">
              Analisis keamanan jaringan pada studi kasus perusahaan XYZ
            </p>
            <p className="text-zinc-400">Deadline: 15 Mei 2024</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Kecerdasan Buatan
            </h2>
            <p className="text-zinc-300 mb-2">
              Implementasi algoritma machine learning untuk prediksi harga saham
            </p>
            <p className="text-zinc-400">Deadline: 1 Juni 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
