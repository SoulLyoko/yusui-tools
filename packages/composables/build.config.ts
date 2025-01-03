import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['index.ts'],
  externals: ['@smallwei/avue', 'axios', 'element-plus', 'vue'],
})
