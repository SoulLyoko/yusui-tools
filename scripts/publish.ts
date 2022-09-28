// import { execSync } from "child_process";
// import path from "path";
import npmPublish from "@jsdevtools/npm-publish";

const packages = ["composables", "types", "utils"];

packages.forEach(name => {
  console.log("🚀 ~ file: publish.ts ~ line 11 ~ process.env", process.env);
  npmPublish({
    package: `./packages/${name}/package.json`,
    token: process.env.NPM_TOKEN,
    access: "public"
  });
  // execSync("npm publish --access public", {
  //   stdio: "inherit",
  //   cwd: path.join("packages", name)
  // });
});
