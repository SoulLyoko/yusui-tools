import { execSync } from 'node:child_process'
import path from 'node:path'

import fs from 'fs-extra'
import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cleancss from 'gulp-clean-css'
import gulpSass from 'gulp-sass'
import sass from 'sass'

const { dest, series, src } = gulp

function buildPackages() {
  execSync('vite build')
}
function buildStyles() {
  const packagesToBuild = ['components', 'flow-design', 'form-design', 'theme']
  const tasks = packagesToBuild.map((packageName) => {
    return () =>
      src(`packages/${packageName}/**/*.scss`)
        .pipe(gulpSass(sass).sync())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(dest(`packages/${packageName}/dist`))
  })
  series(...tasks)()
}
function buildTypes() {
  execSync('vue-tsc -p tsconfig.build.json')
  execSync('tsc-alias -p tsconfig.build.json')
}
function copyDist() {
  const packages = fs.readdirSync(path.join('dist'))
  packages.forEach((name) => {
    fs.copySync(path.join('dist', name), path.join('packages', name, 'dist'))
  })
}

buildPackages()
buildStyles()
buildTypes()
copyDist()
