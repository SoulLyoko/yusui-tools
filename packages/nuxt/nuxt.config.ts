import { env } from 'node:process'

import 'nuxt'
import { createEnvDts, transformProxy } from '@yusui/plugins'

import openapi from './modules/openapi'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // internal config
  ssr: false,
  devtools: {
    enabled: true,
    timeline: { enabled: true },
    customTabs: [
      {
        name: 'iconify',
        title: 'Iconify',
        icon: 'simple-icons:iconify',
        view: { type: 'iframe', src: 'https://icon-sets.iconify.design/' },
      },
    ],
  },
  experimental: { typedPages: true },
  typescript: { typeCheck: true },
  nitro: {
    devProxy: env.VITE_PROXY ? transformProxy(env.VITE_PROXY) as any : {},
  },
  vite: {
    plugins: [
      createEnvDts({ dts: 'types/vite-env.d.ts' }),
    ],
  },
  hooks: {
    'pages:extend': (pages) => {
      // 删除路由 components/*,*.ts
      removePagesMatching(/\/components|\.ts$/, pages)
      function removePagesMatching(pattern: RegExp, pages: any[] = []) {
        const pagesToRemove: any[] = []
        for (const page of pages) {
          if (pattern.test(page.file))
            pagesToRemove.push(page)
          else
            removePagesMatching(pattern, page.children)
        }
        for (const page of pagesToRemove)
          pages.splice(pages.indexOf(page), 1)
      }
    },
  },
  // modules config
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    openapi as any,
  ],
  elementPlus: { importStyle: false },
  lodash: { prefix: '_', upperAfterPrefix: false },
  piniaPersistedstate: { storage: 'localStorage' },
})
