// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@prisma/nuxt"],
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    public: {
      discordWebhook: process.env.DISCORD_WEBOOK_URL,
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
})