import path from "path";

import fs from "fs-extra";

const packages = ["composables", "config", "types", "utils"];

export function updatePackageJSON() {
  const { version, description, author, license, homepage, repository } = fs.readJSONSync("package.json");

  packages.forEach(name => {
    const packageJSONPath = path.join("packages", name, "package.json");
    const packageJSON = fs.readJSONSync(packageJSONPath);
    packageJSON.version = version;
    packageJSON.description = description;
    packageJSON.author = author;
    packageJSON.license = license;
    packageJSON.homepage = homepage;
    packageJSON.repository = repository;
    fs.writeJSONSync(packageJSONPath, packageJSON, { spaces: 2 });
  });
}
