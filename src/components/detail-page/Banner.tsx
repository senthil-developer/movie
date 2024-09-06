import { getImg, videoURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie, Videos } from "../../../types";

interface BannerProps {
  detail: Movie;
  videos: Videos;
}

export const Banner = ({ detail, videos }: BannerProps) => {
  const backgroundStyle = {
    backgroundImage: `url(${getImg(detail?.backdrop_path, "original")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const videosData = videos?.results?.length! > 0;

  const trailer = videos?.results.find((video) => video.type === "Trailer");

  const teaser = videos?.results.find((video) => video.type === "Teaser");

  const poster = getImg(detail?.poster_path, "w500");

  return (
    <div
      className={`w-full h-96 lg:h-[50rem] flex  flex-col justify-end relative after:bg-gradient-to-top after:size-full after:absolute after:inset-0 after:z-0 `}
      style={backgroundStyle}
    >
      <div className="flex items-end gap-5 md:gap-20 z-10 m-5">
        <div className="w-48 aspect-[1/1.5] relative">
          <Image
            src={poster}
            alt="poster"
            fill
            className="rounded-lg object-top"
          />
        </div>
        <div className="w-[80%] space-y-4 max-md:h-24">
          <h1 className="text-lg lg:text-4xl font-bold text-white truncate ">
            {detail?.title ? detail.title : detail?.name}
          </h1>

          {videosData && (
            <button className="p-1 px-3 bg-red-400 rounded-full ">
              <Link
                href={videoURL(
                  trailer?.key || teaser?.key || videos?.results[0].key!
                )}
                target="_blank"
              >
                Watch Trailer
              </Link>
            </button>
          )}

          <p className="md:text-lg text-gray-300   max-md:line-clamp-2">
            {detail?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
