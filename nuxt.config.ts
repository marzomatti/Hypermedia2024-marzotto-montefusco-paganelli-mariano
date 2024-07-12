// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      openaiApiKey: process.env.OPENAI_API_KEY,
      openaiAssistantId: process.env.OPENAI_ASSISTANT_ID,
      assetsUrl: process.env.ASSETS_URL,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",
  '@pinia/nuxt',
  '@nuxtjs/supabase'
  ],
  css: [
    '~/assets/css/global.css'
  ],
  supabase: {
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
  ssr: true,
})

