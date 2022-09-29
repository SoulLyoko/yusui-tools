import { execSync } from "child_process";
import path from "path";

import fs from "fs-extra";

const packages = ["composables", "utils"];

function buildPkgs() {
  execSync(`vite build`);
}
function buildTypes() {
  execSync(`vue-tsc -d --emitDeclarationOnly`);
}
function copyTypes() {
  packages.forEach(name => {
    fs.copySync(path.join("dist", name, "src"), path.join("packages", name, "dist"));
  });
}

function build() {
  buildPkgs();
  buildTypes();
  copyTypes();
}
build();
