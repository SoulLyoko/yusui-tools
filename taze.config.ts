import { defineConfig } from 'taze'

export default defineConfig({
  // ignore packages from bumping
  exclude: ['@antfu/eslint-config', '@vueuse/core', 'vitepress'],
})
