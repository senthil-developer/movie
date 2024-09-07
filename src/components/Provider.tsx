"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import Image from "next/image";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <header className="">
        <Navbar
          className={"max-w-7xl mx-auto flex justify-evenly fixed top-0 w-full"}
        />
      </header>
      <main className="max-w-7xl mx-auto max-xl:px-4">{children}</main>
    </QueryClientProvider>
  );
};

export default Provider;
