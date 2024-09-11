"use client";
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
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/components/common/NextJsImage";
import { useState } from "react";
import image1 from "/public/images/jadwal-e-learning.jpeg";
import { Inline, Zoom } from "yet-another-react-lightbox/plugins";

// utils
import clsx from "clsx";

// data table here
import { courseSchedule } from "@/data/jadwalKuliah";

export default function Page() {
  // Light Box State
  const [open, setOpen] = useState(false);
  const toggleOpen = (state: boolean) => () => setOpen(state);

  return (
    <article>
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
      <div className="my-5">
        {/* Jadwal E-Learning Start */}
        <div>
          <h2>Jadwal E - Learning</h2>
          {/* Image jadwal e-learning */}
          <Lightbox
            close={() => setOpen(false)}
            slides={[image1]}
            render={{
              slide: NextJsImage,
              buttonNext: () => null,
              buttonPrev: () => null,
            }}
            className="w-full bg-transparent aspect-video mt-5"
            plugins={[Inline]}
            carousel={{ imageFit: "cover", padding: 0, finite: true }}
            on={{ click: toggleOpen(true) }}
          />
          {/* view on image  */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[image1]}
            render={{
              slide: NextJsImage,
              buttonNext: () => null,
              buttonPrev: () => null,
            }}
            plugins={[Zoom]}
            carousel={{ finite: true }}
          />
          <a
            className="text-sm px-3 py-2 rounded-lg border-[1px] mt-5 inline-block"
            href="https://el-filkom.unpam.ac.id/login/"
            target="_blank"
          >
            Buka E - Learning
          </a>
        </div>
        {/* Jadwal E-Learning Stop */}

        {/* Tabel Jadwal Start */}
        <div className="mt-10">
          <h2 className="my-5">Jadwal Kuliah</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-zinc-300">
              <thead className="text-xs uppercase bg-zinc-800 text-zinc-200">
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
        </div>
        {/* Table Jadwal Stop */}
      </div>
    </article>
  );
}
