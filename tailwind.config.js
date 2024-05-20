// tailwind.config.js

module.exports = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // Add your custom colors or extend existing colors here
      colors: {
        'custom-gray': '#65655e',
        'custom-purple-light': '#7d80da',
        'custom-purple': '#b0a3d4',
        'custom-purple-dark': '#cebacf',
        'custom-pink': '#c6afb1',
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}
