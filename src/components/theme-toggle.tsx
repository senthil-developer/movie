"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

export const ThemeToggle = () => {
  const { systemTheme, setTheme, theme } = useTheme();

  const [mode, setMode] = useState(false);

  useEffect(() => setMode(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mode &&
        (currentTheme === "dark" ? (
          <MdLightMode size={30} onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill size={30} onClick={() => setTheme("dark")} />
        ))}
    </>
  );
};
