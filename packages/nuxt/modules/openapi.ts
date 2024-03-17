import type { GenerateApiConfig } from '@yusui/request/openapi'

import { defineNuxtModule } from '@nuxt/kit'
import { generateApi } from '@yusui/request/openapi'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    openapi?: GenerateApiConfig
  }
  interface NuxtOptions {
    openapi?: GenerateApiConfig
  }
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    openapi?: GenerateApiConfig
  }
  interface NuxtOptions {
    openapi?: GenerateApiConfig
  }
}

export default defineNuxtModule<GenerateApiConfig>({
  meta: {
    name: '@yusui/nuxt/modules/openapi',
    configKey: 'openapi',
  },
  setup(options) {
    generateApi(options)
  },
})
