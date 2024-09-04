import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
  description: "MoviePage",
  icons: {
    icon: "/next.svg",
  },
};

const MoviePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className=""> Movie page </h1>
    </div>
  );
};

export default MoviePage;
