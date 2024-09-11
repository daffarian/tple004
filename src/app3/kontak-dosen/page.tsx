import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function KontakDosen() {
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
              <span className="text-zinc-200">Kontak Dosen</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="container">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">
          Kontak Dosen Semester 7
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Dr. Shigit PHP.S.KOM
            </h2>
            <p className="text-zinc-300 mb-1">
              Mata Kuliah: Ngopi dan wejangan Jawa
            </p>
            <p className="text-zinc-300 mb-1">
              Email: novandiriowicaksono@gmail.com
            </p>
            <p className="text-zinc-300">Telp: 082110429753</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Prof. Daftot node js
            </h2>
            <p className="text-zinc-300 mb-1">
              Mata Kuliah: Nyantui dan relax!
            </p>
            <p className="text-zinc-300 mb-1">
              Email: andi.wijaya@university.ac.id
            </p>
            <p className="text-zinc-300">Telp: 081234567892</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Dr. Siti Rahayu
            </h2>
            <p className="text-zinc-300 mb-1">Mata Kuliah: Kecerdasan Buatan</p>
            <p className="text-zinc-300 mb-1">
              Email: siti.rahayu@university.ac.id
            </p>
            <p className="text-zinc-300">Telp: 081234567893</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Dr. Ahmad Fauzi
            </h2>
            <p className="text-zinc-300 mb-1">Mata Kuliah: Analisis Big Data</p>
            <p className="text-zinc-300 mb-1">
              Email: ahmad.fauzi@university.ac.id
            </p>
            <p className="text-zinc-300">Telp: 081234567894</p>
          </div>
        </div>

        <div className="mt-8 text-zinc-300">
          <p>Catatan:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Silakan hubungi dosen melalui email untuk pertanyaan akademis.
            </li>
            <li>Gunakan nomor telepon hanya untuk keperluan mendesak.</li>
            <li>Hormati jam kerja dosen (Senin-Jumat, 08.00-16.00).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
