import { exec, execSync } from "child_process";
import path from "path";
import npmPublish from "@jsdevtools/npm-publish";

const packages = ["composables", "types", "utils"];

execSync(`echo "//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}" > .npmrc`);
execSync(`pnpm publish -r`);

// function publish() {
// packages.forEach(name => {
// execSync(`echo "//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}" > .npmrc`, {
//   cwd: path.join("packages", name)
// });
// npmPublish({
//   package: path.resolve("packages", name, "package.json"),
//   token: process.env.NPM_TOKEN,
//   access: "public"
// });
//   });
// }
// publish();
