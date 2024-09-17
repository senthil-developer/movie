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
    <Slider className={"w-full h-full"}>
      {isImagesLoading && (
        <div className="flex gap-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="size-52 bg-gray-400 animate-pulse" />
          ))}
        </div>
      )}
      {images?.backdrops?.map((image) => (
        <div
          key={image.file_path}
          className="size-52 h-full aspect-video relative"
        >
          <Image
            src={getImg(image.file_path, "original")}
            alt={`movies images`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Slider>
  );
};
