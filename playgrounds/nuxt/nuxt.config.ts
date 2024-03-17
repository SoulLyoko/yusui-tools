// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@yusui/request': '../../packages/request/index.ts',
    '@yusui/request/openapi': '../../packages/request/openapi/index.ts',
    '@yusui/components': '../../packages/components/index.ts',
    '@yusui/composables': '../../packages/composables/index.ts',
  },
  ssr: false,
  devtools: { enabled: true },
  imports: { dirs: ['api'] },
  modules: [
    '@element-plus/nuxt',
  ],
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://petstore3.swagger.io/api/v3',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
})
