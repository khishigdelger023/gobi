import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1320px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#CBC9BC",
        baseBG: '#F3F2ED',
        secondary: "#1A1817",
        muted: "#ECEBE9",
        accent: "#FFC0CB",
        success: "#B2FCE4",
        warning: "#E1FF4D",
        baseContent: "#1A1817",
        neutralContent: "#666666",
        secondaryContent: '#3C3C3C',
      },
      gridTemplateColumns: {
        products_sm: 'repeat(auto-fill, minmax(160px, 1fr))',
        products_md: 'repeat(auto-fill, minmax(260px, 1fr))',
        products_lg: 'repeat(auto-fill, minmax(360px, 1fr))',
      },
      screen: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} as Config;
