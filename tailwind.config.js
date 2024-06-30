/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // custom color palette
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "primary-color": "#FF2E2E",
      "headings-black": "#494850",
      gray: "#9795B5",
      red: "#ff0000",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      red: {
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
      }
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      spacing: {
        x_padding_page: "9rem",
        y_padding_page: "5rem",
        y_padding_title_text: "0.875rem",
        x_padding_page_mobile: "1rem",
        y_padding_page_mobile: "1rem",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};