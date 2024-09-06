"use client";

import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { CardsType, Movie, MovieCredits, Videos } from "@../../../types";
import Image from "next/image";
import {
  formatAmt,
  formatDate,
  getImg,
  hourToMins,
  videoURL,
} from "@/lib/utils";
import { Slider } from "@/components/slider";
import Cards from "@/components/cards";
import Link from "next/link";

interface DetailPageProps {
  id: string;
  type: "movie" | "series" | "person";
}

export const DetailPage = ({ id, type }: DetailPageProps) => {
  const { data: detail, error, isLoading } = useFetch<Movie>({ path: id });

  const {
    data: credit,
    error: creditError,
    isLoading: isCreditLoading,
  } = useFetch<MovieCredits>({ path: `${id}/credits` });

  const {
    data: videos,
    error: videoError,
    isLoading: isVideoLoading,
  } = useFetch<Videos>({ path: `${id}/videos` });

  const poster = getImg(detail?.poster_path, "w500");

  const backgroundStyle = {
    backgroundImage: `url(${getImg(detail?.backdrop_path, "original")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const topCast = credit?.cast.slice(0, 20);

  const date = formatDate(detail?.release_date || detail?.first_air_date!);
  const trailer = videos?.results.find((video) => video.type === "Trailer");
  const teaser = videos?.results.find((video) => video.type === "Teaser");

  return (
    <>
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

            <p className="md:text-lg text-gray-300   max-md:line-clamp-2">
              {detail?.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3  md:w-[80%] justify-center *:flex *:gap-4 my-8 mx-auto items-center">
        <h3>Release Date: {date}</h3>|
        <h3>Run Time : {hourToMins(detail?.runtime!)}</h3>|
        <h3>Revenue : &#36; {formatAmt(detail?.revenue!)}</h3>|
        <h3>Status : {detail?.status}</h3>|
        <div className="flex gap-5 items-center">
          <h3>Genres :</h3>
          <h3 className="flex flex-wrap gap-2 *:p-1 *:px-2 *:rounded-full *:bg-slate-500 cursor-pointer">
            {detail?.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </h3>
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-4">Top Cast</h2>
      <Slider className={"w-full"}>
        {topCast?.map((cast) => (
          <div key={cast.id} className="flex flex-col items-center">
            <div className="w-[9.4rem] aspect-square relative rounded-full items-center flex overflow-hidden">
              <Image
                src={getImg(cast?.profile_path, "w185")}
                alt={cast.name}
                fill
                className="object-[20%_20%] rounded-full object-cover"
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

      <h2 className="text-3xl font-semibold my-4">Similar {type}</h2>
      <Cards path={`${id}/similar`} type={type} />

      <h2 className="text-3xl font-semibold my-4">Recommended {type} </h2>
      <Cards path={`${id}/recommendations`} type={type} />
    </>
  );
};
