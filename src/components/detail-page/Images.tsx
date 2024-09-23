import React from "react";
import { Slider } from "../slider";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { getImg } from "@/lib/utils";
import { DetailImage } from "../../../types";

export const Images = ({ id }: { id: string }) => {
  const { data: images, isLoading: isImagesLoading } = useFetch<DetailImage>({
    path: `${id}/images`,
  });

  return (
    <Slider>
      {isImagesLoading && (
        <div className="flex gap-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="size-52 bg-gray-400 animate-pulse" />
          ))}
        </div>
      )}
      {images?.backdrops?.map((image, i) => (
        <div
          key={image.file_path}
          className="size-52 relative flex-shrink-0 aspect-video"
        >
          <Image
            src={getImg(image.file_path, "original")}
            alt={`movies image ` + (i + 1)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover size-full"
            placeholder="blur"
            blurDataURL="/placeholder.svg"
          />
        </div>
      ))}
    </Slider>
  );
};
