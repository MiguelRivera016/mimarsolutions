import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tokens del nuevo sistema (CSS variables)
        border: "rgb(var(--color-gray-200) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",

        // Compatibilidad con clases existentes (brand-*)
        brand: {
          50: "rgb(var(--color-primary-light) / <alpha-value>)",
          100: "rgb(var(--color-primary-light) / <alpha-value>)",
          200: "rgb(var(--color-primary-light) / <alpha-value>)",
          300: "rgb(var(--color-primary) / <alpha-value>)",
          400: "rgb(var(--color-primary) / <alpha-value>)",
          500: "rgb(var(--color-primary) / <alpha-value>)",
          600: "rgb(var(--color-primary) / <alpha-value>)",
          700: "rgb(var(--color-primary-dark) / <alpha-value>)",
          800: "rgb(var(--color-primary-dark) / <alpha-value>)",
          900: "rgb(var(--color-primary-dark) / <alpha-value>)",
        },
        // Mantener paletas existentes por compatibilidad (si alguna vista las usa)
        gold: {
          50: "#FFF7E8",
          100: "#FEEBC8",
          200: "#FCD38D",
          300: "#F9C46A",
          400: "#F4B645",
          500: "#F8A91C",
          600: "#DA8F10",
        },
        ink: { 900: "#0f172a", 700: "#334155", 600: "#475569", 500: "#64748b" },
      },
      boxShadow: { card: "0 16px 48px rgba(2,32,71,.10)" },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
export default config;
