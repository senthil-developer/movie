"use client";

import { useState } from "react";
import Cards from "./cards";
import { cn } from "@/lib/utils";

interface TabType {
  title: string;
  path: string;
  type: "person" | "series" | "movie";
}

export const Tab = ({ title, type, path }: TabType) => {
  const [isWeek, setIsWeek] = useState(false);

  return (
    <div>
      <div className="flex justify-between w-full">
        <h2 className="title">{title}</h2>
        <div className="flex gap-4">
          <button
            className={cn("px-2 rounded-md", !isWeek && "bg-yellow-300")}
            onClick={() => setIsWeek(false)}
          >
            Day
          </button>
          <button
            className={cn("px-2 rounded-md", isWeek && "bg-yellow-300")}
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
