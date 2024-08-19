import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      orange: {
        DEFAULT: "#FAAD25",
        50: "#FFEFEA",
        100: "#FFE0D3",
        200: "#FFBEA6",
        300: "#FF9D7A",
        400: "#FF7D4D",
        500: "#FF5C21",
        600: "#CC4A1A",
        700: "#993714",
        800: "#66250D",
        900: "#331207",
        950: "#1A0A04",
      },
      green: {
        50: "#EBF6ED",
        100: "#D7ECDB",
        200: "#AFDAB7",
        300: "#87C794",
        400: "#5FB570",
        500: "#37A24C",
        600: "#2C823D",
        700: "#21612E",
        800: "#16411E",
        900: "#0B200F",
        950: "#061008",
      },
      blue: {
        50: "#EDF1FF",
        100: "#D9E1FF",
        200: "#B2C3FF",
        300: "#8CA6FF",
        400: "#6588FF",
        450: "#5278FF",
        500: "#3F6AFF",
        600: "#3256D0",
        700: "#2642A2",
        800: "#192D73",
        900: "#0D1945",
        950: "#060F2D",
      },
      grey: {
        50: "#E8E8EB",
        100: "#D1D2D6",
        200: "#A3A4AE",
        300: "#757785",
        400: "#47495D",
        500: "#191C34",
        600: "#14162A",
        700: "#0F111F",
        800: "#0A0B15",
        900: "#05060A",
        950: "#030305",
      },
      red: "#FF2149",
      pink: "#FD4BE1",
      turquoise: "#23B0FF",
      lime: "#CFE44F",
      purple: "#B152EC",
      black: "#191C34",
      white: "#F8F9EE",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: ["12px", "20px"],
      // sm: ['14px', '20px'],
      base: ["16px", "24px"],
      lg: ["18px", "24px"],
      xl: ["24px", "36px"],
      "2xl": ["32px", "36px"],
      "3xl": ["40px", "40px"],
      "4xl": ["44px", "48px"],
      "4.2xl": ["48px", "52px"],
      "4.5xl": ["62px", "68px"],
      "5xl": ["80px", "85px"],
      "6xl": ["100px", "92px"],
    },
    extend: {
      fontFamily: {
        sans: ['"Circular Std"', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: "450",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      listStyleType: {
        "decimal-leading-zero": "decimal-leading-zero",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
