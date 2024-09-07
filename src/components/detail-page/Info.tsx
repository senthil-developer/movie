import { formatAmt, formatDate, hourToMins } from "@/lib/utils";
import React from "react";
import { Movie } from "../../../types";

interface InfoProps {
  detail: Movie;
  type: "movie" | "series";
}

export const Info = ({ detail, type }: InfoProps) => {
  const date = formatDate(detail?.release_date || detail?.first_air_date!);

  return (
    <div className="flex flex-wrap gap-3  md:w-[80%] justify-center *:flex *:gap-4 my-8 mx-auto items-center">
      <h3>Release Date: {date}</h3>|
      {type === "movie" && (
        <>
          <h3>Run Time : {hourToMins(detail?.runtime!)} </h3> |
          <h3>Revenue : &#36; {formatAmt(detail?.revenue!)}</h3>|
        </>
      )}
      {type === "series" && (
        <>
          <h3>Seasons : {detail?.seasons?.length} </h3> |
        </>
      )}
      <h3>Status : {detail?.status}</h3>|
      <div className="flex gap-5 md:items-center">
        <h3 className="whitespace-nowrap">Genres :</h3>
        <h3 className="flex flex-wrap gap-2 *:p-1 *:px-2 *:rounded-full *:border *:border-red-500 cursor-pointer">
          {detail?.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </h3>
      </div>
    </div>
  );
};
