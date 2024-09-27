import path from 'node:path'

import fg from 'fast-glob'
import vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

const packages = fg.globSync('packages/*/index.ts')
export const alias = packages.map((pkg) => {
  return {
    find: pkg.replace(/^packages\/(.*)\/index.ts$/, '@yusui/$1'),
    replacement: path.resolve(__dirname, pkg),
  }
})

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
