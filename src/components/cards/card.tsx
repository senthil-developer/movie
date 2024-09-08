import React, { useEffect, useRef } from "react";
import { CardType } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import useFav from "@/hooks/useStore";

interface CardProps {
  item: CardType;
  type: "movie" | "series" | "person";
}

const Card = ({ item, type }: CardProps) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const { data, getItem } = useFav();

  console.log(getItem("movie/4004"));

  const isFav = false;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className="flex flex-col relative"
      variants={{
        hidden: { x: "30%", opacity: 0, filter: "blur(20px)" },
        visible: { x: 0, opacity: 1, filter: "blur(0px)" },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "linear" }}
      ref={ref}
    >
      <Link href={`/${type}/${item.id}`}>
        <div className="relative w-[11rem] aspect-[1.2/1.7]">
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
        <div className="flex flex-col gap-0.5 w-[11rem]">
          <p className="truncate">{item.title ? item.title : item.name}</p>
          <p className="truncate text-gray-300/70 text-sm">
            {formatDate(item.release_date || item.first_air_date)}
          </p>
        </div>
      </Link>
      <span
        className={cn(
          "clip-path-star size-10 absolute top-1 right-1 inline-flex justify-center items-center after:size-full after:inset-[0] after:scale-75 after:clip-path-star",

          isFav ? "bg-[#fed701] after:bg-inherit" : "bg-gray-800 "
        )}
      ></span>
    </motion.div>
  );
};

export default Card;
