import { defineConfig } from 'taze'

export default defineConfig({
  // ignore packages from bumping
  exclude: ['@dcloudio/*', 'element-plus', 'eslint', 'gulp', 'vue-tsc'],
})
