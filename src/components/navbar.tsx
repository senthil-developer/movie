"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = ({ className }: { className: string }) => {
  const pathname = usePathname();
  const active = () => {
    const link = pathname.split("/")[1];
    switch (link) {
      case "":
        return 0;
      case "movie":
        return 1;
      case "series":
        return 2;
      case "person":
        return 3;
      default:
        return 0;
    }
  };
  const current = active();
  return (
    <div className={cn(" z-20", className)}>
      <div className="flex w-[50%] relative justify-center border-2 rounded-full border-[rgba(255,255,255,0.3)] p-1 backdrop-blur">
        {navLinks.map((item) => (
          <Link key={item.name} href={item.path} className="flex-1 text-center">
            {item.name}
          </Link>
        ))}
        <span
          className="absolute -z-10 w-[23%] h-[75%] bg-red-500 rounded-full left-1 transition-all duration-300"
          style={{ left: ` ${current * 25 + 1}%` }}
        ></span>
      </div>
    </div>
  );
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Movie", path: "/movie" },
  { name: "Series", path: "/series" },
  { name: "Person", path: "/person" },
];
