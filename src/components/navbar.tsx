"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeToggle } from "./theme-toggle";

import { GoHome } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { PiTelevisionSimple, PiTelevisionSimpleFill } from "react-icons/pi";
import { TiStarFullOutline,TiStarOutline } from "react-icons/ti";

export const Navbar = ({
  className,
  isMob = false,
}: {
  className: string;
  isMob?: boolean;
}) => {
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
      case "favorite":
        return 4;
      default:
        return 0;
    }
  };
  const current = active();
  return (
    <nav className={cn(" z-20", className)}>
      {!isMob && (
        <div className="relative size-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              style={{ objectFit: "cover", width: "30px", height: "30px" }}
              className="h-auto w-auto rounded-lg"
            />
          </Link>
        </div>
      )}
      <ul
        className={cn(
          "flex relative justify-center",
          isMob
            ? "w-full justify-around py-2"
            : "w-[60%] border-2 rounded-full border-[rgba(255,255,255,0.3)] p-1 backdrop-blur max-md:hidden"
        )}
      >
        {navLinks.map((item) => (
          <li
            key={item.name}
            className={cn(
              "flex-1 text-center",
              isMob && "flex items-center justify-center text-2xl"
            )}
          >
            <Link href={item.path}>{isMob ? current === i ? item.current_icon : item.icon : item.name}</Link>
            {isMob && <span className="sr-only">{item.name}</span>}
          </li>
        ))}
        <span
          className={cn(
            "absolute -z-10 bg-red-500 transition-all duration-300",
            isMob
              ? "bottom-0 h-1 w-[20%]"
              : "w-[18%] h-[75%] rounded-full left-1"
          )}
          style={{
            left: `
            ${isMob ? current * 20 : current * 20 + 1}%`,
          }}
        />
      </ul>
      {!isMob && <ThemeToggle />}
    </nav>
  );
};

const navLinks = [
  { name: "Home", path: "/", icon: <GoHome size={25} />, current_icon: <FaHome size={25} /> },
  { name: "Movie", path: "/movie", icon: <BiMoviePlay size={25} />, current_icon: <BiSolidMoviePlay size={25} /> },
  { name: "Series", path: "/series", icon: <PiTelevisionSimple size={25} />, current_icon: <PiTelevisionSimpleFill size={25} /> },
  { name: "Person", path: "/person", icon: <IoPersonOutline size={25} />, current_icon: <IoPersonSharp size={25} /> },
  { name: "Favorite", path: "/favorite", icon: <TiStarOutline size={25} />, current_icon: <TiStarFullOutline size={25} /> }
];
