/** @type {import('tailwindcss').Config} */
const phi = 1.618;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        bg: {
          primary: "#0a0a0a",
          secondary: "#111111",
          tertiary: "#1a1a1a",
        },
        text: {
          primary: "#e8e8e8",
          secondary: "#a0a0a0",
          muted: "#6a6a6a",
        },
        accent: {
          DEFAULT: "#ff6b35",
          dim: "#cc5529",
        },
        border: "#1a1a1a",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)"],
        serif: ["var(--font-playfair)"],
      },
      fontSize: {
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
      spacing: {
        xs: "0.382rem",
        sm: "0.618rem",
        md: "1rem",
        lg: "1.618rem",
        xl: "2.618rem",
        "2xl": "4.236rem",
        "3xl": "6.854rem",
      },
      lineHeight: {
        phi: String(phi),
      },
    },
  },
  plugins: [],
};