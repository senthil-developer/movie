"use client";

import { useQuery } from "@tanstack/react-query";
import { CardType } from "../../types";

interface Props {
  path: string;
}

export function useFetch<T>({ path }: Props) {
  const { data, error, isLoading } = useQuery<T>({
    queryKey: [path],
    queryFn: async () => {
      const key = process.env.NEXT_PUBLIC_API_KEY;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${path}?api_key=${key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    retry: false,
  });

  return { data, error, isLoading };
}
