import { Metadata } from "next";
import dynamic from "next/dynamic";


export const metadata: Metadata = {
  title: "Favorite",
};
 
const FavoritePage = () => {
const Fav = dynamic(() => import("./fav"), { ssr: false });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Fav />
    </div>
  );
};

export default FavoritePage;
