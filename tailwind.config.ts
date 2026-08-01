import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#07111F",
        glass: "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.1)",
        primary: "#22D3EE",
        accent: "#7C3AED",
        text: "#F8FAFC",
        secondary: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-geist-sans)", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      spacing: {
        18: "72px",
        30: "120px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        riseBlur: {
          "0%": { opacity: "0", filter: "blur(10px)", transform: "translateY(16px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(34,211,238,0)" },
          "50%": { boxShadow: "0 0 22px rgba(34,211,238,.8)" },
        },
      },
      animation: {
        rise: "rise 1s cubic-bezier(.19,1,.22,1) forwards",
        "rise-blur": "riseBlur 1.1s cubic-bezier(.19,1,.22,1) forwards",
        float: "float 3.2s ease-in-out infinite",
        glow: "glow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
