// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@ruffle-rs/ruffle',
          type: 'text/javascript',
        },
      ],
    },
  },
  modules: ['@unocss/nuxt', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: true,
      standalone: true,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-07-27',
})
