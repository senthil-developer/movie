"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import Link from "next/link";
import { IoLogoGithub, IoIosMail, IoLogoLinkedin } from "react-icons/io";
import { ThemeProvider } from "next-themes";

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
      <ThemeProvider enableSystem defaultTheme="system" attribute="class">
        <header>
          <Navbar
            className={
              "max-w-7xl mx-auto flex justify-between fixed top-0 w-full"
            }
          />
          <Navbar
            className={
              "flex justify-center fixed bottom-0 w-full md:hidden bg-gray-300"
            }
            isMob
          />
        </header>
        <main className="max-w-7xl mx-auto max-xl:px-4">{children}</main>
        <footer className="mb-14 mt-5 flex w-full flex-col">
          <div className="flex items-center justify-evenly">
            {Links.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                target="_blank"
                className="text flex items-center gap-2"
              >
                {link.icon} {link.social}
              </Link>
            ))}
          </div>
          <div className="text-center">
            movie-universe-nextjs@vercel.app &#169; 2024 All Rights Reserved
          </div>
        </footer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;

const Links = [
  {
    id: 1,
    icon: <IoLogoGithub />,
    social: "Github",
    link: "https://github.com/senthil-developer/movie",
  },
  {
    id: 2,
    icon: <IoLogoLinkedin />,
    social: "Linkedin",
    link: "https://linkedin.com/in/senthil-developer",
  },
  {
    id: 3,
    icon: <IoIosMail />,
    social: "Email",
    link: "mailto:senthildeveloper4@gmail.com",
  },
];
