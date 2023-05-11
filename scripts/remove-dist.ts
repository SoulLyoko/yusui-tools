import path from 'node:path'

import fs from 'fs-extra'

fs.removeSync('dist')
const dirs = fs.readdirSync('packages')

dirs.forEach((dir) => {
  fs.removeSync(path.join('packages', dir, 'dist'))
})
