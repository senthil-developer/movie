"use client";

import useFav from "@/hooks/useStore";
import { cn, handleFavClick } from "@/lib/utils";
import React, { ButtonHTMLAttributes, useRef } from "react";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

export const Slider = ({ children, className }: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.clientWidth / 2;
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.clientWidth / 2;
    }
  };

  const { getItem, addItem } = useFav();

  return (
    <div className="relative">
      <Button pos={"left"} onClick={handlePrev} aria-label="Previous">
        &lt;
        <span className="sr-only">Previous Button</span>
      </Button>
      <Button pos={"right"} onClick={handleNext} aria-label="Next">
        &gt;
        <span className="sr-only">Next Button</span>
      </Button>
      <div className={cn("w-full overflow-hidden", className)}>
        <div
          ref={containerRef}
          className="flex gap-4 h-fit w-full overflow-x-auto scroll-smooth scrollbar-none scrollbar-webkit-none"
          onClick={(e) => handleFavClick(e, getItem, addItem)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  pos: "right" | "left";
}

const Button: React.FC<ButtonProps> = ({ children, pos, ...props }) => {
  return (
    <button
      className={cn(
        "absolute top-[50%] rounded-full translate-y-[-50%] z-10 disabled:cursor-not-allowed disabled:opacity-50 size-10 bg-gray-300/70 text-black max-md:hidden",
        pos === "left" ? "left-[0%]" : "right-[0%]"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
