// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",
  '@pinia/nuxt',
  '@nuxtjs/supabase'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  supabase: {
    redirect: false
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  } as any,
})
