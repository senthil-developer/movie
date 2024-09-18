import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { cn, formatDate, getImg } from "@/lib/utils";
import useFav from "@/hooks/useStore";
import { Animate } from "../animate";

interface CardProps {
  item: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    name: string;
    profile_path: string;
    first_air_date: string;
  };
  type: "movie" | "series" | "person";
  animateFrom?: "x" | "y";
  isFav?: boolean;
}

const Card = ({ item, type, animateFrom = "x", isFav = false }: CardProps) => {
  return (
    <Animate animatedFrom={animateFrom}>
      <div className="flex flex-col relative">
        <Link href={`/${type}/${item.id}`}>
          <div className="relative w-[11rem] aspect-[1.2/1.7]">
            <Image
              src={getImg(
                item.poster_path ? item.poster_path : item.profile_path,
                "w500"
              )}
              alt={item.title ? item.title : item.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
              placeholder="blur"
              blurDataURL="/placeholder.svg"
            />
          </div>
          <div className="flex flex-col gap-0.5 w-[11rem]">
            <p className="truncate">{item.title ? item.title : item.name}</p>
            <p className="truncate text-gray-300/70 text-sm">
              {formatDate(item.release_date || item.first_air_date)}
            </p>
          </div>
        </Link>
        <span
          className={cn(
            "clip-path-star size-8 absolute top-1 right-1 inline-flex justify-center items-center after:size-full after:inset-[0] after:scale-75 after:clip-path-star cursor-pointer transition-all duration-200",
            isFav
              ? "bg-[#fed701] after:bg-inherit"
              : "bg-white after:bg-gray-800"
          )}
          title={isFav ? "Remove from favorite" : "Add to favorite"}
          data-id={`${type}-${item.id}`}
          data-type={type}
          data-poster={item.poster_path || item.profile_path}
          data-title={item.title || item.name}
          data-date={item.release_date || item.first_air_date}
        />
      </div>
    </Animate>
  );
};

export default Card;
