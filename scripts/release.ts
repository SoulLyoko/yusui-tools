import { execSync } from 'node:child_process'
import path from 'node:path'

import fs from 'fs-extra'

const { version } = fs.readJSONSync('package.json')

console.log(`Releasing v${version}...`)
updatePackageJSON()
function updatePackageJSON() {
  const { version, description, author, license, homepage, repository } = fs.readJSONSync('package.json')
  const packages = fs.readdirSync('packages')
  packages.forEach((name) => {
    const packageJSONPath = path.join('packages', name, 'package.json')
    if (!fs.existsSync(packageJSONPath))
      return
    const packageJSON = fs.readJSONSync(packageJSONPath)
    packageJSON.version = version
    packageJSON.description = description
    packageJSON.author = author
    packageJSON.license = license
    packageJSON.homepage = homepage
    packageJSON.repository = repository
    fs.writeJSONSync(packageJSONPath, packageJSON, { spaces: 2 })
  })
}

console.log('Generating changelog...')
execSync('pnpm changelog')

console.log('Committing changes...')
execSync('git add .')
execSync(`git commit -m "chore: release v${version}"`)
execSync(`git tag -a v${version} -m "v${version}"`)
