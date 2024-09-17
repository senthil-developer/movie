"use client";

import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { CardType, PersonImage, type Person as PersonType } from "../../../../types";
import { cn, formatDate, getDept } from "@/lib/utils";
import Image from "next/image";
import { Slider } from "@/components/slider";
import Card from "@/components/cards/card";
import { getImg } from "@/lib/utils";
import { DetailImage } from "@/../types";


interface CombinedCredit {
  cast: CardType[];
  crew: CardType[];
}

export const Person = ({ id }: { id: string }) => {
  const { data: person } = useFetch<PersonType>({ path: id });
  const dept = getDept(person!);
  const dob = formatDate(person?.birthday!);

  const [viewMore, setViewMore] = useState(false);

  const { data: combinedCredit, isLoading } = useFetch<CombinedCredit>({
    path: `${id}/combined_credits`,
  });

  if (!combinedCredit) return <div>Loading...</div>;

  const { cast, crew } = combinedCredit;
  const knowFor = [...cast, ...crew];

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center lg:w-[80%] lg:mx-auto">
        <div className="relative w-[11rem] aspect-[1.2/1.7] rounded-md">
          <Image
            src={
              person?.profile_path
                ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                : "/placeholder.svg"
            }
            width={200}
            height={300}
            priority
            alt={person?.name!}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="flex">
            Name : <h1> {person?.name}</h1>
          </span>
          <p>
            {" Career as : "}
            {dept}
          </p>
          <div className="flex gap-2 ">
            Born :<span>{dob} </span>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <p className="font-bold text-lg">Biography</p>
        <p
          className={cn(
            "max-h-16 overflow-hidden transition-all duration-700 text-justify ",
            viewMore && "max-h-[500px]"
          )}
        >
          {person?.biography}
        </p>
        <button
          className={cn("text-sky-300 underline", viewMore && "text-red-300")}
          onClick={() => setViewMore(!viewMore)}
        >
          Read {viewMore ? "Less" : "More"}...
        </button>
      </div>
      <p className="title">Images</p>
      <Images id={id} />

      <p className="title">Known for</p>
      <Slider>
        {isLoading && (
          <div className="flex gap-5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-60 aspect-[1/1.5] bg-gray-400 rounded-lg animate-pulse" />
                <div className="w-40 h-6 bg-gray-400 rounded-full animate-pulse-fast" />
                <div className="w-16 h-6 bg-gray-400 rounded-full animate-pulse-fast" />
              </div>
            ))}
          </div>
        )}
        {knowFor.map((item: CardType) => (
          <Card
            key={item?.id}
            item={item}
            type={item.media_type === "tv" ? "series" : "movie"}
          />
        ))}
      </Slider>
    </div>
  );
};




 const Images = ({ id }: { id: string }) => {
  const { data: images, isLoading: isImagesLoading } = useFetch<PersonImage>({
    path: `${id}/images`,
  });

  return (
    <Slider className={"w-full h-full"}>
      {isImagesLoading && (
        <div className="flex gap-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="size-52 bg-gray-400 animate-pulse" />
          ))}
        </div>
      )}
      {images?.profiles?.map((image) => (
        <div
          key={image.file_path}
          className="size-52 h-full aspect-video relative"
        >
          <Image
            src={getImg(image.file_path, "original")}
            alt={`movies images`}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Slider>
  );
};
