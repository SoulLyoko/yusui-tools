import { defineVixtConfig } from 'vixt/core'

export default defineVixtConfig({
  app: {
    css: ['uview-plus/index.scss', '@/styles/main.css'],
  },
  typescript: {
    typeCheck: { vueTsc: true },
    tsConfig: {
      compilerOptions: {
        paths: {
          '@yusui/*': ['../../../packages/*'],
        },
        types: [
          'element-plus/global',
          '@yusui/types/avue',
        ],
      },
    },
  },
})
