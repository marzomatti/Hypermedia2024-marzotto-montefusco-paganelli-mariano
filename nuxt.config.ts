// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",
  '@pinia/nuxt',
  '@nuxtjs/supabase'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  runtimeConfig: {
    public: {
      openaiApiKey: process.env.VUE_APP_OPENAI_API_KEY || '',
      openaiAssistantId: process.env.VUE_APP_OPENAI_ASSISTANT_ID || '',
    },
  },
  supabase: {
    url: "https://fiknxhhagkhsxoyjjbdi.supabase.co",
      key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpa254aGhhZ2toc3hveWpqYmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTU5MjUsImV4cCI6MjAzMjQ5MTkyNX0.7VHCpKWuRH8lhDEgWHZf4_gQJKRibpIlSgg1Pc5UyZI"
      ,
      redirect: false
  
    },

  app: {
    head: {
      title: "No Woman Alone",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" }, //import from google font
        { rel: "preconnect", href: "https://fonts.gstatic.com" }, //import from google font
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap", //import from google font
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})

