"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../cards/card";
import { fetchData } from "../fetchData";
import { CardType } from "../../../types";
import { handleFavClick } from "@/lib/utils";
import useFav from "@/hooks/useStore";

export const Explore = ({ type }: { type: "movie" | "tv" | "person" }) => {
  const { ref, inView } = useInView();

  const [page, setPage] = useState<CardType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const { getItem, addItem } = useFav();

  useEffect(() => {
    if (inView) {
      fetchData({
        path: type === "person" ? "person/popular" : `discover/${type}`,
        params: `page=${pageNum}`,
      }).then((res) => {
        setPage([...page, ...res.results]);
        setPageNum(pageNum + 1);
      });
    }
  }, [inView, pageNum, page, type]);
  return (
    <>
      <div className="flex w-full flex-col pt-10">
        <section
          className="grid h-full w-full grid-cols-2 place-content-center place-items-center  md:grid-cols-3  lg:grid-cols-4 gap-4"
          onClick={(e) => handleFavClick(e, getItem, addItem)}
        >
          {page?.map((item, i) => {
            return (
              <Card
                key={item.id}
                item={item}
                type={type === "tv" ? "person" : type}
                animateFrom="y"
              />
            );
          })}
        </section>
      </div>
      <section className="flex w-full items-center  justify-center">
        <div
          ref={ref}
          className="h-10 w-10 origin-center animate-spin
        rounded-full border-t-4"
        />
      </section>
    </>
  );
};
