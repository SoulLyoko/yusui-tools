import { execSync } from 'node:child_process'
import process from 'node:process'

import fs from 'fs-extra'

const { readJSONSync } = fs

const { version: oldVersion } = readJSONSync('package.json')

execSync('bumpp -r --no-commit --no-tag --no-push', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (version === oldVersion) {
  console.log('Bumpp canceled')
  process.exit()
}
console.log('Generating changelog')
execSync('pnpm changelog')
console.log('Git commit')
execSync('git add .')
execSync(`git commit -m "chore: release v${version}"`)
console.log('Git tag')
execSync(`git tag -a v${version} -m "v${version}"`)
