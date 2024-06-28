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
    url: "https://fiknxhhagkhsxoyjjbdi.supabase.co",
      key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpa254aGhhZ2toc3hveWpqYmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTU5MjUsImV4cCI6MjAzMjQ5MTkyNX0.7VHCpKWuRH8lhDEgWHZf4_gQJKRibpIlSgg1Pc5UyZI"
      ,
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
