import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const Cards = dynamic(() => import("@/components/cards"), { ssr: false });
  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <h1>Popular Movie</h1>
        <Cards path={"movie/popular"} type={"movie"} />
      </div>
      <div className="">
        <h1>Popular Series</h1>
        <Cards path={"tv/popular"} type="series" />
      </div>
      <div className="">
        <h1>Popular Person</h1>
        <Cards path={"person/popular"} type="person" />
      </div>
    </div>
  );
}
