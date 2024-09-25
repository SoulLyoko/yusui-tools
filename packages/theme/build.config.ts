// import fs from 'fs-extra'
// import sass from 'sass'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    { input: 'index.ts' },
    { builder: 'mkdist', input: '.', pattern: ['**/index.scss', '!node_modules/**'], loaders: ['sass'] },
  ],
  externals: ['vue'],
  // hooks: {
  //   'mkdist:done': () => {
  //     const compiledSass = sass.compile('./index.scss', { style: 'compressed' })
  //     fs.writeFileSync('dist/index.css', compiledSass.css, 'utf-8')
  //   },
  // },
})
