import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function JadwalPerkuliahan() {
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
              <span className="text-zinc-200">Jadwal Perkuliahan</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="container">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">
          Jadwal Perkuliahan Kelas 07TPLE004
        </h1>
        <p className="mb-4 text-zinc-300">
          Kuliah cuma hari Sabtu kawan, Jangan malas!!
        </p>

        {/* Tabel Jadwal */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-zinc-300">
            <thead className="text-xs uppercase bg-zinc-800 text-zinc-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Waktu
                </th>
                <th scope="col" className="px-6 py-3">
                  Mata Kuliah
                </th>
                <th scope="col" className="px-6 py-3">
                  Dosen
                </th>
                <th scope="col" className="px-6 py-3">
                  Ruangan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-zinc-900">
                <td className="px-6 py-4">08:00 - 09:40</td>
                <td className="px-6 py-4">Belajar PHP Sampe Mampus</td>
                <td className="px-6 py-4">Dr. Shigit.PHP.S.KOM</td>
                <td className="px-6 py-4">Di Parkiran biasa sambil ngopi</td>
              </tr>
              <tr className="bg-zinc-800">
                <td className="px-6 py-4">10:00 - 11:40</td>
                <td className="px-6 py-4">Keamanan Jaringan PHP</td>
                <td className="px-6 py-4">Dr. Shigit.PHP.S.KOM</td>
                <td className="px-6 py-4">Di Parkiran biasa sambil ngopi</td>
              </tr>
              <tr className="bg-zinc-900">
                <td className="px-6 py-4">13:00 - 14:40</td>
                <td className="px-6 py-4">
                  Belajar Jadi Manusia yang baik ya anjing!
                </td>
                <td className="px-6 py-4">Dr. Shigit.PHP.S.KOM</td>
                <td className="px-6 py-4">Di Parkiran biasa sambil ngopi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
