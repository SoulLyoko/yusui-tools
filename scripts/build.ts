import { execSync } from "child_process";
import path from "path";

import fs from "fs-extra";

function buildPkgs() {
  execSync(`vite build`);
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
  buildTypes();
  copyTypes();
}
build();
