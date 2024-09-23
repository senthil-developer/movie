"use client";

import Card from "@/components/cards/card";
import useFav from "@/hooks/useStore";

import React from "react";
import { CardType } from "../../../types";

 const Fav = () => {
  const { getData } = useFav();
  const { data } = getData();

  if(data.length < 1){
   return(
     <div className="flex h-full w-full justify-center items-center">
     No Favorites...
     </div>
   )
  }
  
  return (
    <section className="grid h-full w-full grid-cols-2 place-content-center place-items-center  md:grid-cols-3  lg:grid-cols-4 gap-4">
      {data.map((item, i) => (
        <Card
          key={i}
          item={{ ...item, id: Number(item.id) }}
          type={item.type}
          animateFrom="y"
        />
      ))}
    </section>
  );
};

export default Fav
