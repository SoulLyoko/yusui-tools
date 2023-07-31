import path from 'node:path'
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
const input = {
  'form-design': path.resolve(__dirname, 'packages/form-design/index.ts'),
  'flow-design': path.resolve(__dirname, 'packages/flow-design/index.ts'),
  'components': path.resolve(__dirname, 'packages/components/index.ts'),
  'composables': path.resolve(__dirname, 'packages/composables/index.ts'),
  'plugins': path.resolve(__dirname, 'packages/plugins/index.ts'),
  'types': path.resolve(__dirname, 'packages/types/index.ts'),
  'uni-composables': path.resolve(__dirname, 'packages/uni-composables/index.ts'),
  'utils': path.resolve(__dirname, 'packages/utils/index.ts'),
}
export const alias = Object.entries(input)
  .map(([name, path]) => ({ find: `@yusui/${name}`, replacement: path }))
  // flow-pages 不打包
  .concat(
    { find: '@yusui/flow-pages', replacement: path.resolve(__dirname, 'packages/flow-pages/index.ts') },
    { find: '@yusui/uvue', replacement: path.resolve(__dirname, 'packages/uvue/index.ts') },
  )

export default defineConfig(({ mode }) => {
  if (mode === 'production')
    execSync('pnpm remove:dist')

  return {
    plugins: [Vue()],
    resolve: {
      alias,
    },
    build: {
      lib: {
        entry: input,
      },
      rollupOptions: {
        external,
        output: [
          // {
          //   inlineDynamicImports: true,
          //   entryFileNames: "index.umd.js",
          //   file: input.utils,
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
