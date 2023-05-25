import path from 'node:path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import { avuePatch, compatibleTips } from '../../packages/plugins'

export default defineConfig({
  plugins: [Vue(), avuePatch(), compatibleTips()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
