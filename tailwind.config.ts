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
      },
      screens: {
        mobile: { max: "727px" },
        tablet: { min: "728px", max: "1280px" },
        desktop: { min: "1281px" },
      },
      fontFamily: {
        suit: ["suit"],
        suitBold: ["suitBold"],
        suitSemiBold: ["suitSemiBold"],
        intel: ["intel"],
        jalnan: ["Jalnan"],
      },
    },
  },
  plugins: [],
};
export default config;
