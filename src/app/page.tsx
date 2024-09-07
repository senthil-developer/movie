import dynamic from "next/dynamic";
import { Banner } from "./_banner";

export default function Home() {
  const Cards = dynamic(() => import("@/components/cards"), { ssr: false });

  return (
    <div className="flex flex-col gap-6">
      <Banner />
      <div>
        <h1 className="title">Popular Movie</h1>
        <Cards path={"movie/popular"} type={"movie"} />
      </div>
      <div>
        <h1 className="title">Popular Series</h1>
        <Cards path={"tv/popular"} type="series" />
      </div>
      <div>
        <h1 className="title">Popular Person</h1>
        <Cards path={"person/popular"} type="person" />
      </div>
    </div>
  );
}
