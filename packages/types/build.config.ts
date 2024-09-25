import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['index.ts'],
  externals: ['vue', 'element-plus'],
})
