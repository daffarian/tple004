export type Slide = {
  src: string;
  alt: string;
}

export type ImageViewerTypes = {
  className?: string;
  images: Slide[]
};
