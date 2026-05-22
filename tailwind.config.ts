import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Apple-Compliance palette ===
        ink: {
          50: "#FAFAFA",
          100: "#F5F5F7", // Apple gray surface
          200: "#EDEDEF",
          300: "#D2D2D7", // Apple border gray
          400: "#A1A1A6",
          500: "#86868B", // Apple secondary text
          600: "#5E5E62",
          700: "#3A3A3C", // Strong secondary
          800: "#26262A",
          900: "#1D1D1F", // Apple headline black
          950: "#0A0A0B",
        },
        navy: {
          50: "#F2F4FA",
          100: "#DCE1EE",
          200: "#B3BDD8",
          300: "#7A89B5",
          400: "#3E5390",
          500: "#22335E",
          600: "#1A2A4F",
          700: "#162449",
          800: "#0F1B3D", // Deep elegant navy
          900: "#0A1230",
          950: "#070C22",
        },
        gold: {
          50: "#FBF7EE",
          100: "#F4ECD8",
          200: "#E8D5A8",
          300: "#D8B777",
          400: "#C49A4A", // Hover gold
          500: "#9F7728", // Primary refined gold
          600: "#7A5D1F", // Dark gold
          700: "#5A4517",
          800: "#3D2F0F",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
      },
      backgroundImage: {
        "gradient-navy":
          "linear-gradient(135deg, #070C22 0%, #0F1B3D 60%, #162449 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #C49A4A 0%, #9F7728 60%, #7A5D1F 100%)",
        "gradient-surface":
          "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)",
      },
      boxShadow: {
        // Apple-like subtle shadows
        subtle: "0 1px 2px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.02)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.06)",
        elevated: "0 4px 8px -2px rgba(0,0,0,0.05), 0 16px 32px -8px rgba(0,0,0,0.08)",
        glow: "0 8px 24px -8px rgba(159,119,40,0.25)",
        ring: "0 0 0 1px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scroll-x": "scrollX 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
