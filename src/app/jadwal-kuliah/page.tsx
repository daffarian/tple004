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
        <div>
          <h2>Jadwal E - Learning</h2>
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
        </div>
      </div>
    </article>
  );
}
