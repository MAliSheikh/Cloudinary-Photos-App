"use client";


import CloudinaryImage from "@/components/CloudinaryImage";
import { ImageGrid } from "@/components/imageGrid";

interface searchResult {
  public_id: string;
  tags: string[];
}

export default function AlbumGrid({ images }: { images: searchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: searchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}