"use client";

import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { CardType, Movie, MovieCredits } from "../../../../types";
import Image from "next/image";
import { formatAmt, getImg, hourToMins } from "@/lib/utils";
import { Slider } from "@/components/slider";

interface DetailPageProps {
  id: string;
}

export const DetailPage = ({ id }: DetailPageProps) => {
  const { data: detail, error, isLoading } = useFetch<Movie>({ path: id });
  const {
    data: credit,
    error: creditError,
    isLoading: isCreditLoading,
  } = useFetch<MovieCredits>({ path: `${id}/credits` });

  const poster = getImg(detail?.poster_path, "w500");

  const backgroundStyle = {
    backgroundImage: `url(${getImg(detail?.backdrop_path, "original")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const topCast = credit?.cast.slice(0, 20);

  const date = new Date(detail?.release_date!).toDateString();

  return (
    <>
      <div
        className={`w-full h-[50rem] flex  flex-col justify-end relative after:bg-gradient-to-top after:size-full after:absolute after:inset-0 after:z-0 `}
        style={backgroundStyle}
      >
        <div className="flex items-end gap-20 z-10 m-5">
          <div className="w-48 aspect-[1/1.5] relative">
            <Image
              src={poster}
              alt="poster"
              fill
              className="rounded-lg object-top"
            />
          </div>
          <div className="w-[80%] space-y-4">
            <h1 className="text-4xl font-bold text-white">{detail?.title}</h1>
            <p className="text-lg text-gray-300">{detail?.overview}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3  w-[80%]">
        <h3>
          Release Date: <span className="text-gray-300">{date}</span>
        </h3>
        <h3>Run Time : {hourToMins(detail?.runtime!)}</h3>
        <h3>Budget : &#36;{formatAmt(detail?.budget!)} (estimated)</h3>
        <h3>Revenue : &#36; {formatAmt(detail?.revenue!)}</h3>
      </div>
      <h2 className="text-3xl font-semibold mb-4">Top Cast</h2>
      <Slider className={"w-full"}>
        {topCast?.map((cast) => (
          <div key={cast.id} className="flex flex-col items-center">
            <div className="w-36 aspect-square relative rounded-full overflow-hidden">
              <Image
                src={getImg(cast?.profile_path, "w185")}
                alt="cast"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center w-36 space-y-[0.1rem]">
              <p className="text-sm text-gray-300 truncate whitespace-nowrap">
                {cast.name}
              </p>
              <p className="text-sm text-gray-600 truncate whitespace-nowrap">
                {cast.character}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
