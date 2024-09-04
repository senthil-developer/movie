import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities(
        {
          ".scrollbar-none": {
            scrollbarWidth: "none" /* Firefox */,
          },
          ".scrollbar-hide": {
            overflow: "hidden",
          },
          ".scrollbar-webkit-none::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Edge */,
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
export default config;
