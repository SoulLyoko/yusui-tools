import { defineConfig } from 'bumpp'

export default defineConfig({
  files: ['package.json', 'packages/*/package.json'],
  commit: false,
  tag: false,
  push: false,
})
