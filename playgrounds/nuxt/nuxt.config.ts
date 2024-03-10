// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    'nuxt-open-fetch',
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
  openFetch: {
    clients: {
      pet: {
        baseURL: '/api',
        schema: 'https://petstore3.swagger.io/api/v3/openapi.json',
      },
    },
    openAPITS: {
      pathParamsAsTypes: true,
      transform(schemaObject, options) {
        Object.values(options.ctx.parameters).forEach((p) => {
          p.required = undefined
        })
        schemaObject.required = undefined
        if (schemaObject.format === 'binary')
          return 'Blob'
      },
    },
  },
})
