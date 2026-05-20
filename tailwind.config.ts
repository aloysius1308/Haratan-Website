import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef7ff",
          100: "#d9efff",
          500: "#1f88d5",
          700: "#07549f",
          800: "#083f7c",
          900: "#092b5f",
          950: "#061936"
        },
        cyanSoft: "#78d9f7",
        ink: "#102033"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 25, 54, 0.12)",
        card: "0 12px 30px rgba(9, 43, 95, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
