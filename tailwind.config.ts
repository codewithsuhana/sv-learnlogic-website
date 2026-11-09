import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060913",
          900: "#0B1120",
          850: "#10182B",
          800: "#17233D",
          700: "#1E2F52",
          600: "#2B416E",
          500: "#3E5C9A",
          400: "#607EB9",
          300: "#94A9D3",
          200: "#C6D3EB",
          100: "#E6EDF8",
          50: "#F3F7FC",
        },
        brand: {
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          cyan: "#06B6D4",
          "cyan-light": "#38BDF8",
          purple: "#7C3AED",
          indigo: "#4F46E5",
          accent: "#00D2FF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-outfit)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tech-glow":
          "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.18), transparent 70%)",
        "cyan-glow":
          "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
