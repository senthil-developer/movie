import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-top":
          "linear-gradient(to top, rgba(0, 0, 0, .9), transparent)",
      },
      translate: {
        full: "translate(50%,50%)",
      },
      clipPath: {
        star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, e, theme }: any) {
      addUtilities(
        {
          ".scrollbar-none": {
            scrollbarWidth: "none", // For Firefox
          },
          ".scrollbar-hide": {
            overflow: "hidden",
          },
          ".scrollbar-webkit-none::-webkit-scrollbar": {
            display: "none", // For WebKit browsers
          },
        },
        ["responsive", "hover"]
      );

      const clipPathUtilities = theme("clipPath") as Record<string, string>;
      const clipPathUtilitiesClass = Object.keys(clipPathUtilities).reduce(
        (acc, key) => {
          const value = clipPathUtilities[key];
          acc[`.${e(`clip-path-${key}`)}`] = { clipPath: value };
          return acc;
        },
        {} as Record<string, { clipPath: string }>
      );

      addUtilities(clipPathUtilitiesClass, ["responsive", "hover"]);
    },
  ],
};
export default config;
