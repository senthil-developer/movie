"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CardsType } from "../../types";
import { getImg } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";

const INDEX = Math.floor(Math.random() * 20);

export const Banner = () => {
  const { data } = useFetch<CardsType>({ path: "movie/popular" });

  const backgroundStyle = {
    backgroundImage: `url(${getImg(
      data?.results[INDEX].backdrop_path,
      "original"
    )})`,
    backgroundSize: "cover",
  };
  return <div className="w-full h-[40rem]" style={backgroundStyle}></div>;
};
