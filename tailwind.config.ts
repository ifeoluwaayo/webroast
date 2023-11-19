import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["var(--font-inconsolata)"],
        nunito: ["var(--font-nunito)"],
      },
      keyframes: {
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
