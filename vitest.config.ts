import { resolve } from 'node:path'

import vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

// 打包
const entry = {
  'components': resolve(__dirname, 'packages/components/index.ts'),
  'composables': resolve(__dirname, 'packages/composables/index.ts'),
  'form-design': resolve(__dirname, 'packages/form-design/index.ts'),
  'flow-design': resolve(__dirname, 'packages/flow-design/index.ts'),
  'theme': resolve(__dirname, 'packages/theme/index.ts'),
  'types': resolve(__dirname, 'packages/types/index.ts'),
  'utils': resolve(__dirname, 'packages/utils/index.ts'),
}

export const alias = Object.entries({ ...entry })
  .map(([name, path]) => ({ find: `@yusui/${name}`, replacement: path }))

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
