import path from 'node:path'

import vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

export const alias = [{
  find: /^@yusui\/(.*)$/,
  replacement: path.resolve(import.meta.dirname, 'packages/$1'),
}]

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
    },
  }
})
