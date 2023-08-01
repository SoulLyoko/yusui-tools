import { resolve } from 'node:path'
import { execSync } from 'node:child_process'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const external = [
  /@yusui/,
  /lodash/,
  'vue',
  /element-plus/,
  '@vueuse/core',
  '@dcloudio/uni-app',
  /dayjs/,
  '@iconify/vue',
  'mitt',
  'node:fs',
  'node:path',
  /@logicflow/,
  'vuedraggable',
  '@smallwei/avue',
  'axios',
  /monaco-editor/,
  'acorn',
  'astring',
  'json5',
  '@antv/layout',
  '@vue/compiler-sfc',
  'magic-string',
]
// 打包
const entry = {
  'components': resolve(__dirname, 'packages/components/index.ts'),
  'composables': resolve(__dirname, 'packages/composables/index.ts'),
  'form-design': resolve(__dirname, 'packages/form-design/index.ts'),
  'flow-design': resolve(__dirname, 'packages/flow-design/index.ts'),
  'plugins': resolve(__dirname, 'packages/plugins/index.ts'),
  'types': resolve(__dirname, 'packages/types/index.ts'),
  'utils': resolve(__dirname, 'packages/utils/index.ts'),
}
// 不打包
const unpkg = {
  'flow-pages': resolve(__dirname, 'packages/flow-pages/index.ts'),
  'uvue': resolve(__dirname, 'packages/uvue/index.ts'),
}

export const alias = Object.entries({ ...entry, ...unpkg })
  .map(([name, path]) => ({ find: `@yusui/${name}`, replacement: path }))

export default defineConfig(({ mode }) => {
  if (mode === 'production')
    execSync('pnpm remove:dist')
  return {
    plugins: [Vue()],
    resolve: { alias },
    build: {
      lib: { entry },
      rollupOptions: {
        external,
        output: [
          // {
          //   inlineDynamicImports: true,
          //   entryFileNames: "index.umd.js",
          //   file: entry.utils,
          //   format: "umd",
          //   dir: "dist"
          // },
          {
            preserveModules: true,
            preserveModulesRoot: 'dist',
            entryFileNames(chunkInfo) {
              return chunkInfo.isEntry ? '[name]/index.mjs' : '[name].mjs'
            },
            format: 'es',
            dir: 'dist',
          },
          {
            preserveModules: true,
            preserveModulesRoot: 'dist',
            entryFileNames(chunkInfo) {
              return chunkInfo.isEntry ? '[name]/index.cjs' : '[name].cjs'
            },
            exports: 'named',
            format: 'cjs',
            dir: 'dist',
          },
        ],
      },
    },
  }
})
