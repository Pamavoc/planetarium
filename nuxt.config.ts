// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@prisma/nuxt", "@tresjs/nuxt"],
  prisma: {
    autoSetupPrisma: true,
  },
  tres: {
    devtools: true,
    glsl: true,
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
