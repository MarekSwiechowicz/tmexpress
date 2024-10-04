import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules/**/*",
  ],

  darkMode: "class",

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      height: {
        "0.25": "1px", // Add a custom height value for 1px
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px", // Min width 480px
        // => @media (min-width: 480px) { ... }

        sm: "640px", // Min width 640px
        // => @media (min-width: 640px) { ... }

        md: "768px", // Min width 768px
        // => @media (min-width: 768px) { ... }

        lg: "1024px", // Min width 1024px
        // => @media (min-width: 1024px) { ... }

        xl: "1280px", // Min width 1280px
        // => @media (min-width: 1280px) { ... }

        xxl: "1880px", // Min width 1280px
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        customGray: "#EFEFEF",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },

      backgroundImage: {
        circularLightXl:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDarkXl:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
    },
  },
  plugins: [],
};
export default config;
