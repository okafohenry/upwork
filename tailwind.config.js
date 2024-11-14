/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ED266F",
        primaryLight: "var(--pink-light)",
        secondary: "#4F0D25"
      },
      size: {
        headerXl: "100px",
        headerLg: "80px",
      },
      rotate: {
        40: '40deg', 
      },
      keyframes: {
        curtainClose: {
          '0%': { transform: 'scaleX(0)', boxShadow: '10px 0px 75px rgba(0, 0, 0, 0.5)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'curtain-close': 'curtainClose 1s ease forwards',
        'curtain-open': 'curtainClose 1s ease backwards', // 1s duration, ease-in effect
      },
    },
  },
  plugins: [],
};
