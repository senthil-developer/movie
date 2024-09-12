import { Metadata } from "next";
import { Fav } from "./fav";

export const metadata: Metadata = {
  title: "Favorite",
};

const FavoritePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className=""> Favorite page </h1>
      <Fav />
    </div>
  );
};

export default FavoritePage;
