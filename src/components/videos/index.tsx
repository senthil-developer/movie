"use client";

import React, {
  ButtonHTMLAttributes,
  useRef,
  useState,
  useEffect,
  Suspense,
} from "react";
import { Video } from "./video";
import { useFetch } from "@/hooks/useFetch";
import { CardsType, CardType, VideoMetadata, Videos } from "@/../types";
import { Slider } from "../slider";

interface type {
  path: string;
}

const Cards = ({ path }: type) => {
  const { data, isLoading, error } = useFetch<Videos>({ path: path });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Slider>
      {isLoading && (
        <div className="flex gap-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="relative w-60 aspect-video bg-gray-400 rounded-lg animate-pulse"
            >
              <div className="absolute left-[50%] top-[50%] transform" />
            </div>
          ))}
        </div>
      )}
      {data?.results.map((item: VideoMetadata) => (
        <Video key={item.id} item={item} />
      ))}
    </Slider>
  );
};

export default Cards;
