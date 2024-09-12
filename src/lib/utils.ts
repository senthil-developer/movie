import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Person } from "../../types";
import { MouseEvent } from "react";
import { FavCardType } from "@/hooks/useStore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImg = (url?: string, q?: string) => {
  return url ? `https://image.tmdb.org/t/p/${q}${url}` : "/placeholder.svg";
};

export const hourToMins = (totalMinutes: string | number) => {
  totalMinutes = parseInt(totalMinutes as string);
  const hour = Math.floor(totalMinutes / 60);
  const min = totalMinutes % 60;
  return `${hour}h ${min}m`;
};

export function formatAmt(amount: string | number) {
  amount = parseInt(amount as string);
  if (amount < 1_000) return amount;

  const suffixes = ["", "K", "M", "B", "T"];
  const tier = (Math.log10(amount) / 3) | 0;
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);

  const formatted = (amount / scale).toFixed(2);
  return formatted.replace(/\.00$/, "") + suffix;
}

export const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB");
};

export const videoURL = (id: string) => {
  return `https://www.youtube.com/watch?v=${id}`;
};

export const getDept = (person: Person) => {
  switch (person?.known_for_department) {
    case "Acting":
      return person?.gender === 1 ? "Actress" : "Actor";
    case "Writing":
      return "Writer";
    case "Directing":
      return "Director";
    case "Editing":
      return "Editor";
    case "Production":
      return "Producer";
    case "Sound":
      return "Music Composer";
    case "Camera":
      return "Cinematographer";
    case "Crew":
      return "Stunts";
    case "Art":
      return "Art Department";
    case "Visual Effects":
      return "VFX Artist";
    case "Lighting":
      return "Lighting Artist";
    case "Costume & Make-Up":
      return "Costume Designer";
    default:
      return "";
  }
};

export const getVariants = (animateFrom: "x" | "y") => {
  switch (animateFrom) {
    case "x":
      return {
        hidden: { x: "30%", opacity: 0, filter: "blur(20px)" },
        visible: { x: 0, opacity: 1, filter: "blur(0px)" },
      };
    case "y":
      return {
        hidden: { y: "30%", opacity: 0, filter: "blur(20px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      };
  }
};

export const handleFavClick = (
  e: MouseEvent<HTMLElement>,
  getItem: (id: string) => boolean,
  addItem: (item: FavCardType) => void,
  removeItem: (id: string) => void
) => {
  const target = e.target as HTMLElement;
  if (!target.getAttribute("data-id")) return;

  const id = target.getAttribute("data-id") as string;
  const date = target.getAttribute("data-date");
  const poster = target.getAttribute("data-poster");
  const title = target.getAttribute("data-title");
  const type = target.getAttribute("data-type");

  if (getItem(id)) {
    removeItem(id);
  } else {
    addItem({
      id: id ? id.split("-")[1] : "",
      release_date: date!,
      poster_path: poster!,
      title: title!,
      type: type as "movie" | "person" | "series",
      backdrop_path: "",
      first_air_date: "",
      vote_average: 0,
      profile_path: "",
      name: "",
      media_type: "",
      favId: id,
    });
  }
};
