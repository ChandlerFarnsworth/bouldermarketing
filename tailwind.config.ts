import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AC8255",
          dark: "#905a36",
          light: "#c89a6f",
        },
        bg: {
          DEFAULT: "#e7decf",
          light: "#f5f0e8",
        },
        text: {
          dark: "#36291a",
          medium: "#594a3a",
          light: "#8a7a65",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-30px) rotate(5deg)",
          },
          "66%": {
            transform: "translateY(-15px) rotate(-5deg)",
          },
        },
        pulse: {
          "0%, 100%": {
            boxShadow: "0 8px 24px rgba(54, 41, 26, 0.12)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(172, 130, 85, 0.3)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;