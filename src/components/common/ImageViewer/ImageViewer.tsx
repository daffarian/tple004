'use client'
// Light Box
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/components/common/ImageViewer/NextJsImage";
import { useState } from "react";
import image1 from "/public/images/jadwal-e-learning.jpeg";
import { Inline, Zoom } from "yet-another-react-lightbox/plugins";

// types
import { ImageViewerTypes } from "@/types/imageViewer";

export default function ImageViewer({ className, images }: ImageViewerTypes) {
  // Light Box State
  const [open, setOpen] = useState(false);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  return (
    <div>
      <Lightbox
        close={() => setOpen(false)}
        slides={images}
        render={{
          slide: NextJsImage,
          buttonNext: () => null,
          buttonPrev: () => null,
        }}
        className={`${className} w-full`}
        plugins={[Inline]}
        carousel={{
          imageFit: "cover",
          padding: 0,
          finite: images.length > 1 ? false : true,
        }}
        on={{ click: toggleOpen(true) }}
      />
      {/* view on image  */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        render={{
          slide: NextJsImage,
          buttonNext: () => null,
          buttonPrev: () => null,
        }}
        plugins={[Zoom]}
        carousel={{ finite: images.length > 1 ? false : true }}
      />
    </div>
  );
}
