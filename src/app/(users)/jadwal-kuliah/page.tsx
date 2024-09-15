// Link
import Link from "next/link";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Light Box
import ImageViewer from "@/components/common/ImageViewer/ImageViewer";

// utils
import clsx from "clsx";

// data table here
import { courseSchedule } from "@/data/jadwalKuliah";

// meta data 
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jadwal Kuliah",
  // description: "Informasi 07TPLE004",
};

export default function Page() {

  const elearningImage = {
    src: "/images/jadwal-e-learning.jpeg",
    alt: "Jadwal E-Learning",
  };

  // src kaldik image
  const kaldikImage = { src: "/images/kaldik.jpeg", alt: "Kalender Akademik" };

  return (
    <div>
      <h1 className="font-bold text-xl fixed w-full text-white left-0 -translate-y-20 z-[-1] flex justify-center items-center text-center top-42">
        Jadwal Kuliah
      </h1>
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
            <BreadcrumbItem>
              <Link className="text-zinc-200" href={"/jadwal-kuliah"}>
                Jadwal Kuliah
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Breadcrumb Stop */}
      <article className="my-5">
        {/* Jadwal E-Learning Start */}
        <section>
          <h2 className="my-5">Jadwal E - Learning</h2>
          {/* Image jadwal e-learning */}
          <ImageViewer className="aspect-video" images={[elearningImage]} />
          {/* Link E-Learning */}
          <a
            className="text-sm px-3 py-2 rounded-lg border-[1px] mt-5 inline-block"
            href="https://el-filkom.unpam.ac.id/login/"
            target="_blank"
          >
            Buka E - Learning
          </a>
        </section>
        {/* Jadwal E-Learning Stop */}

        {/* Tabel Jadwal Start */}
        <section className="mt-10">
          <h2 className="my-5">Jadwal Kuliah</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-zinc-300">
              <thead className="text-xs uppercase bg-zinc-800 font-bold text-zinc-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    NO
                  </th>
                  <th scope="col" className="px-6 py-3">
                    KODE MK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MATA KULIAH
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SKS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    KELOMPOK
                  </th>
                  <th scope="col" className="px-6 py-3 text-nowrap">
                    DOSEN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    WAKTU
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseSchedule.map((value, index) => (
                  <tr
                    className={clsx("", {
                      "bg-zinc-800": (index + 1) % 2 == 0,
                    })}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 text-nowrap">
                      {value.kodeMataKuliah}
                    </td>
                    <td className="px-6 py-4 text-nowrap">
                      {value.namaMataKuliah}
                    </td>
                    <td className="px-6 py-4">{value.sks}</td>
                    <td className="px-6 py-4">{value.kelompok}</td>
                    <td className="px-6 py-4 text-nowrap">{value.dosen}</td>
                    <td className="px-6 py-4 text-nowrap">{value.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Table Jadwal Stop */}
        {/* Kalender Akademik Start */}
        <section className="mt-10">
          <h2 className="my-5">Kalender Akademik</h2>
          <ImageViewer className="aspect-[9/16]" images={[kaldikImage]} />
        </section>
        {/* Kalender Akademik Stop */}
      </article>
    </div>
  );
}
