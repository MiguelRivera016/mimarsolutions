import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6F3FB",
          100: "#D3ECFA",
          200: "#A6D8F4",
          300: "#7CC2EC",
          400: "#44A8E6",
          500: "#0B78C4", // azul MIMAR Solutions (puedes usar #0077C8 si prefieres)
          600: "#0A6DAD",
          700: "#095A8E",
          800: "#084A74",
          900: "#063A59",
        },
        gold: { 50: "#FFF7E8", 100: "#FEEBC8", 200: "#FCD38D", 300: "#F9C46A", 400: "#F4B645", 500: "#F8A91C", 600: "#DA8F10" },
        ink: { 900: "#0f172a", 700: "#334155", 600: "#475569", 500: "#64748b" },
      },
      boxShadow: { card: "0 16px 48px rgba(2,32,71,.10)" },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
export default config;
