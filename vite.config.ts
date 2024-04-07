import { resolve } from 'node:path'
import { execSync } from 'node:child_process'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const external = [
  '@antfu/eslint-config',
  '@antv/layout',
  '@dcloudio/uni-app',
  /@logicflow/,
  '@iconify/vue',
  '@smallwei/avue',
  /@umijs\/openapi/,
  /@vitejs/,
  /@vue/,
  /@yusui/,
  'acorn',
  'astring',
  'axios',
  /dayjs/,
  'echarts',
  /element-plus/,
  'json5',
  /lodash/,
  'magic-string',
  'mitt',
  /monaco-editor/,
  /node:/,
  /pinia/,
  'rollup-plugin-visualizer',
  /unocss/,
  /unplugin/,
  /virtual:/,
  /vite-plugin/,
  'vue',
  'vuedraggable',
  'vue-echarts',
  'vue-request',
  /vue-router/,
  /\.css$/,
]
// 打包
const entry = {
  'components': resolve(__dirname, 'packages/components/index.ts'),
  'composables': resolve(__dirname, 'packages/composables/index.ts'),
  'form-design': resolve(__dirname, 'packages/form-design/index.ts'),
  'flow-design': resolve(__dirname, 'packages/flow-design/index.ts'),
  'plugins': resolve(__dirname, 'packages/plugins/index.ts'),
  'request': resolve(__dirname, 'packages/request/index.ts'),
  'request/openapi': resolve(__dirname, 'packages/request/openapi/index.ts'),
  'theme': resolve(__dirname, 'packages/theme/index.ts'),
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
