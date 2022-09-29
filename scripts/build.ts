import { execSync } from "child_process";
import path from "path";

import fs from "fs-extra";
import { series, src, dest } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";
import gulpSass from "gulp-sass";
import sass from "sass";

function buildPkgs() {
  execSync(`vite build`);
}
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
  execSync(`vue-tsc -d --emitDeclarationOnly`);
}
function copyTypes() {
  const packagesTypes = fs.readdirSync(path.join("dist"));
  packagesTypes.forEach(name => {
    fs.copySync(path.join("dist", name, "src"), path.join("packages", name, "dist"));
  });
}

function build() {
  buildPkgs();
  buildStyles();
  buildTypes();
  copyTypes();
}
build();
