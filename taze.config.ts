import { defineConfig } from 'taze'

export default defineConfig({
  // ignore packages from bumping
  exclude: ['@dcloudio/*', 'eslint', 'gulp', 'vite-plugin-mock', 'vue-tsc'],
})
