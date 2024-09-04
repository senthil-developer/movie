"use client";

import React, {
  ButtonHTMLAttributes,
  useRef,
  useState,
  useEffect,
  Suspense,
} from "react";
import Card from "./card";
import { useFetch } from "@/hooks/useFetch";
import { CardsType, CardType } from "../../types";
import { Slider } from "./slider";

interface type {
  path: string;
  type: "movie" | "series" | "person";
}

const Cards = ({ path, type }: type) => {
  const { data, isLoading, error } = useFetch<CardsType>({ path: path });
  data as CardsType;

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
              className="w-60 aspect-[1/1.5] bg-gray-400 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      )}
      {data?.results.map((item: CardType) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </Slider>
  );
};

export default Cards;
