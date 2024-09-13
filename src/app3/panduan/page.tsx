// Link
import Link from "next/link";
// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Panduan() {
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
              <span className="text-zinc-200">Panduan</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="container">
        <h1 className="text-2xl font-bold mb-6 text-zinc-100">
          Panduan Penggunaan Website dan Informasi Penting
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              Cara Menggunakan Website
            </h2>
            <ol className="list-decimal list-inside text-zinc-300 space-y-2">
              <li>Navigasi menu menggunakan sidebar di sebelah kiri</li>
              <li>
                Akses informasi jadwal, tugas, dan pembayaran di menu
                masing-masing
              </li>
              <li>
                Untuk bantuan lebih lanjut, hubungi admin melalui menu Kontak
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              Panduan Pembayaran Kuliah
            </h2>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Pembayaran dapat dilakukan melalui transfer bank atau di loket
                pembayaran kampus
              </li>
              <li>
                Nomor rekening pembayaran: BNI 1234567890 a.n. Universitas XYZ
              </li>
              <li>
                Setelah melakukan pembayaran, kirim bukti transfer ke WhatsApp
                Bagian Keuangan: 081234567890
              </li>
              <li>
                Pembayaran harus dilakukan sebelum tanggal 5 setiap bulannya
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              Panduan Pembayaran Seminar
            </h2>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Biaya seminar dapat dibayarkan bersamaan dengan SPP atau
                terpisah
              </li>
              <li>Gunakan kode bayar SEMINAR-[NIM] saat melakukan transfer</li>
              <li>Konfirmasi pembayaran ke Sekretariat Jurusan</li>
              <li>Simpan bukti pembayaran untuk ditunjukkan saat seminar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              Informasi Penting Lainnya
            </h2>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Perkuliahan semester 7 berlangsung dari Agustus hingga Desember
                2024
              </li>
              <li>
                Ujian Tengah Semester dijadwalkan pada minggu ke-8 perkuliahan
              </li>
              <li>
                Ujian Akhir Semester dijadwalkan pada minggu ke-16 perkuliahan
              </li>
              <li>
                Pengumpulan tugas akhir paling lambat 1 minggu sebelum UAS
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
