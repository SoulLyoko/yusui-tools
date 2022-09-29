import { execSync } from "child_process";
import path from "path";
import fs from "fs-extra";

const packages = ["composables", "types", "utils"];

const rootPackageJSON = fs.readJSONSync("package.json");
const { version, description, author, license, homepage, repository } = rootPackageJSON;

function updatePackageJSON() {
  packages.forEach(name => {
    const packageJSONPath = path.join("packages", name, "package.json");
    const packageJSON = fs.readJSONSync(packageJSONPath);
    packageJSON.version = version;
    packageJSON.description = description;
    packageJSON.author = author;
    packageJSON.license = license;
    packageJSON.homepage = homepage;
    packageJSON.repository = repository;
    if (name === "types") {
      packageJSON.types = "src/index.d.ts";
      packageJSON.exports = {
        ".": {
          types: "./src/index.d.ts"
        },
        "./*": "./*"
      };
    } else {
      packageJSON.main = "dist/index.js";
      packageJSON.module = "dist/index.mjs";
      packageJSON.unpkg = "dist/index.umd.js";
      packageJSON.jsdelivr = "dist/index.umd.js";
      packageJSON.types = "dist/index.d.js";
      packageJSON.exports = {
        ".": {
          import: "./dist/index.mjs",
          require: "./dist/index.js",
          types: "./dist/index.d.ts"
        },
        "./*": "./*"
      };
    }
    fs.writeJSONSync(packageJSONPath, packageJSON, { spaces: 2 });
  });
}
updatePackageJSON();

execSync("git add .");
execSync(`git commit -m "chore: release v${version}"`);
execSync(`git tag -a v${version} -m "v${version}"`);
