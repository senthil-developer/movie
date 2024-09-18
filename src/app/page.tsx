import { Banner } from "./_banner";
import { Tab } from "@/components/Tab";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Banner />
      <Tab path="trending/movie" type="movie" title="Trending Movie" />
      <Tab path="trending/tv" type="series" title="Trending Series" />
      <Tab path="trending/person" type="person" title="Trending Person" />
    </div>
  );
}
