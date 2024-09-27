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
          '@yusui/uvue': ['../../../packages/uvue'],
        },
      },
    },
  },
})
