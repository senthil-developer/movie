import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Movie Universe",
    template: "%s | Movie Universe",
  },
  description: "Latest movies , series , trending movies,person,history",
  keywords:
    "movie,series,trending,person,history,movie universe,movie universe.vercel.app,latest movies,latest series,latest people,actor history,actress history,",
  openGraph: {
    images: [`${process.env.SITE_URL}/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className + " bg-white dark:bg-black text-black dark:text-white"
        }
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
