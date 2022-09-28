import { execSync } from "child_process";
import path from "path";

const packages = ["composables", "types", "utils"];

packages.forEach(name => {
  execSync("npm publish --access public", {
    stdio: "inherit",
    cwd: path.join("packages", name)
  });
});
