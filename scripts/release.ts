import { execSync } from "child_process";

import fs from "fs-extra";

import { updatePackageJSON } from "./utils";

updatePackageJSON();

const { version } = fs.readJSONSync("package.json");
execSync("git add .");
execSync(`git commit -m "chore: release v${version}"`);
execSync(`git tag -a v${version} -m "v${version}"`);
