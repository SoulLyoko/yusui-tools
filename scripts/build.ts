import { execSync } from "child_process";
import path from "path";

const packages = ["composables", "types", "utils"];

packages.forEach(name => {
  execSync("vite build && vue-tsc -p tsconfig.json -d --emitDeclarationOnly", {
    stdio: "inherit",
    cwd: path.join("packages", name)
  });
});
