import { Metadata } from "next";
import dynamic from "next/dynamic";


export const metadata: Metadata = {
  title: "Favorite",
};
 
const FavoritePage = () => {
const Fav = dynamic(() => import("./fav"), { ssr: false });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className=""> Favorite page </h1>
      <Fav />
    </div>
  );
};

export default FavoritePage;
