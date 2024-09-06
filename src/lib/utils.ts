import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
