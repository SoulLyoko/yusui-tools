import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { alias } from './vite.config'

export default defineConfig(() => {
  return {
    plugins: [Vue()],
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
