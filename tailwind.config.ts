import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0F19",
          surface: "#111827",
          card: "#161F30",
          border: "#1F293D",
          muted: "#94A3B8",
        },
        accent: {
          orange: "#FF5500",
          orangeHover: "#E04800",
          orangeLight: "#FFF4ED",
        },
        trust: {
          green: "#10B981",
          greenLight: "#ECFDF5",
          greenDark: "#065F46",
        },
        tech: {
          cyan: "#06B6D4",
          blue: "#3B82F6",
        },
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
