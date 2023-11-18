import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["var(--font-inconsolata)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
