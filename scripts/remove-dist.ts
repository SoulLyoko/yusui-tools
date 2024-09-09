import path from 'node:path'

import fs from 'fs-extra'

fs.removeSync('dist')
const dirs = fs.readdirSync('packages')

dirs.forEach((dir) => {
  const distPath = path.join('packages', dir, 'dist')
  if (fs.existsSync(distPath)) {
    fs.removeSync(distPath)
  }
})
