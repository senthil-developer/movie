import { Banner } from "./_banner";
import { Tab } from "@/components/Tab";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Banner />
      <Tab path="movie/popular" type="movie" title="Popular Movie" />
      <Tab path="tv/popular" type="series" title="Popular Series" />
      <Tab path="person/popular" type="person" title="Popular Person" />
    </div>
  );
}
