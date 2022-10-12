import { execSync } from "child_process";
import path from "path";

import fs from "fs-extra";
import { series, src, dest } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";
import gulpSass from "gulp-sass";
import sass from "sass";

function buildStyles() {
  const task = () =>
    src("packages/components/**/*.scss")
      .pipe(gulpSass(sass).sync())
      .pipe(autoprefixer())
      .pipe(cleancss())
      .pipe(dest("packages/components/dist"));
  series(task)();
}
function buildTypes() {
  execSync(`vue-tsc -p tsconfig.build.json -d --emitDeclarationOnly`);
  execSync(`tsc-alias -p tsconfig.build.json`);
}
function copyTypes() {
  const packagesTypes = fs.readdirSync(path.join("dist"));
  packagesTypes.forEach(name => {
    fs.copySync(path.join("dist", name), path.join("packages", name, "dist"));
  });
}

buildStyles();
buildTypes();
copyTypes();
