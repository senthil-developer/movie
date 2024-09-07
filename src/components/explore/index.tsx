"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../cards/card";
import { fetchData } from "../fetchData";
import { CardType } from "../../../types";

let pageNum = 1;

export const Explore = ({ type }: { type: "movie" | "tv" | "person" }) => {
  const { ref, inView } = useInView();

  const [page, setPage] = useState<CardType[]>([]);

  useEffect(() => {
    if (inView) {
      fetchData({ path: `discover/${type}`, params: `page=${pageNum}` }).then(
        (res) => {
          setPage([...page, ...res.results]);
          pageNum++;
        }
      );
    }
  }, [inView, page]);
  return (
    <>
      <div className="flex w-full flex-col pt-10">
        <section className="grid h-full w-full grid-cols-2 place-content-center place-items-center  md:grid-cols-3  lg:grid-cols-4 gap-4">
          {page?.map((item, i) => {
            return (
              <Card
                key={i}
                item={item}
                type={type === "tv" ? "person" : type}
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
