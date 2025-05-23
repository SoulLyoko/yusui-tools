import scss from 'rollup-plugin-scss'
import { defineBuildConfig } from 'unbuild'
import vue from 'unplugin-vue/rollup'

export default defineBuildConfig({
  declaration: true,
  entries: ['index.ts'],
  externals: ['@smallwei/avue', '@vue/shared', 'async-validator', 'element-plus', 'lodash', 'vue', 'vue-router'],
  hooks: {
    'rollup:options': function (_, options) {
      if (Array.isArray(options.plugins)) {
        options.plugins.push(
          vue(),
          scss({ fileName: 'index.css' }),
        )
      }
    },
  },
})
