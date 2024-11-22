// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@prisma/nuxt", "@tresjs/nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  tres: {
    devtools: true,
    glsl: true,
  },

  runtimeConfig: {
    public: {
      discordWebhook: process.env.DISCORD_WEBOOK_URL,
    }
  },

  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
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