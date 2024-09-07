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
import { Banner } from "./Banner";
import { Cast } from "./Cast";
import { Info } from "./Info";

interface DetailPageProps {
  id: string;
  type: "movie" | "series";
}

export const DetailPage = ({ id, type }: DetailPageProps) => {
  const { data: detail, error, isLoading } = useFetch<Movie>({ path: id });

  const {
    data: videos,
    error: videoError,
    isLoading: isVideoLoading,
  } = useFetch<Videos>({ path: `${id}/videos` });

  return (
    <>
      <Banner detail={detail!} videos={videos!} />

      <Info detail={detail!} type={type} />

      <h2 className="title">Top Cast</h2>
      <Cast id={id} />

      <h2 className="title">Similar {type}</h2>
      <Cards path={`${id}/similar`} type={type} />

      <h2 className="title">Recommended {type} </h2>
      <Cards path={`${id}/recommendations`} type={type} />
    </>
  );
};
