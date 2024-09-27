import { defineConfig } from 'vite'
import vixt from 'vixt/uni'

import { alias } from '../../vitest.config'

export default defineConfig({
  resolve: {
    alias,
  },
  server: { port: 5174 },
  plugins: [vixt()],
  optimizeDeps: {
    exclude: ['@yusui/uvue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
