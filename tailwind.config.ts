import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        muted: "#F5F6FA",
        soft: "#9CA3AF",
      }
    }
  },
  plugins: [],
};

export default config;
