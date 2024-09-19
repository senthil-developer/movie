"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Cards from './cards';

interface TabType {
  title: string;
  path: string;
  type: "person" | "series" | "movie";
}

export const Tab = ({ title, type, path }: TabType) => {
  
  const [isWeek, setIsWeek] = useState(false);

  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <h2 className="title">{title}</h2>
        <div className="flex gap-4 items-center">
          <button
            className={cn("px-2 h-fit p-1 rounded-md", !isWeek && "bg-yellow-300")}
            onClick={() => setIsWeek(false)}
          >
            Day
          </button>
          <button
            className={cn("px-2 h-fit p-1 rounded-md", isWeek && "bg-yellow-300")}
            onClick={() => setIsWeek(true)}
          >
            Week
          </button>
        </div>
      </div>
      {isWeek ?  <Cards path={`${path}/week`} type={type} /> :  <Cards path={`${path}/day`} type={type} />
      
      }

    </div>
  );
};
