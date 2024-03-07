import path from 'node:path'

import { defineConfig } from 'vite'

import { mixPlugins } from '../../packages/mix/plugins'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@yusui/components': path.resolve(__dirname, '../../packages/components'),
        '@yusui/composables': path.resolve(__dirname, '../../packages/composables'),
      },
    },
    plugins: [...mixPlugins()],
  }
})
