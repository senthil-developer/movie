import { Explore } from "@/components/explore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
};

const MoviePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Explore type="movie" />
    </div>
  );
};

export default MoviePage;
