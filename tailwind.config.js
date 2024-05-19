import { defineNuxtConfig } from 'nuxt3'

// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [],
}

