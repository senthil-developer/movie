import React from "react";
import { CardType } from "../../types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  item: CardType;
  type: "movie" | "series" | "person";
}

const Card = ({ item, type }: CardProps) => {
  return (
    <div className="flex flex-col ">
      <Link href={`/${type}/${item.id}`}>
        <div className="relative w-[12.5rem] h-72">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${
              item.poster_path ? item.poster_path : item.profile_path
            }`}
            alt={item.title ? item.title : item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
            placeholder="blur"
            blurDataURL="/placeholder.svg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
