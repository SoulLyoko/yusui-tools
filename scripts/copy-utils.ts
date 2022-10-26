import fs from "fs-extra";

const dirsToMerge = ["cache"];
const dirsToCopy = ["date", "emitter", "math", "object", "string", "tool", "tree"];

function main() {
  dirsToCopy.forEach(dir => {
    fs.copySync(`packages/utils/${dir}/index.ts`, `packages/uni-utils/${dir}/index.ts`);
  });
  const indexFile = [...dirsToMerge, ...dirsToCopy].map(dir => `export * from "./${dir}";\n`).join("");
  fs.writeFileSync(`packages/uni-utils/index.ts`, indexFile);
}

main();
