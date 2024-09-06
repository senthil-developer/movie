import React from "react";
import { Slider } from "../slider";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { MovieCredits } from "../../../types";
import { getImg } from "@/lib/utils";

export const Cast = ({ id }: { id: string }) => {
  const {
    data: credit,
    error: creditError,
    isLoading: isCreditLoading,
  } = useFetch<MovieCredits>({ path: `${id}/credits` });

  const topCast = credit?.cast.slice(0, 20);

  return (
    <Slider className={"w-full"}>
      {isCreditLoading && (
        <div className="flex gap-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <div className="w-[9.4rem] aspect-square  bg-gray-400 rounded-full animate-pulse" />
              <div className="w-20 h-4 bg-gray-400 rounded-full animate-pulse-fast" />
              <div className="w-16 h-3 bg-gray-400 rounded-full animate-pulse-fast" />
            </div>
          ))}
        </div>
      )}
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
  );
};
