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
    backgroundPosition : "center",
  };
  return <div className="w-full h-[40rem] flex items-center justify-center" style={backgroundStyle}>
<h1 className='bg-gradient-to-r from-purple-500  via-violet-500 to-yellow-500  bg-clip-text text-transparent font-bold'>Welcome to MOVIE UNIVERSE</h1>
</div>;
};
