import path from "path";
import npmPublish from "@jsdevtools/npm-publish";

const packages = ["composables", "types", "utils"];

function publish() {
  packages.forEach(name => {
    npmPublish({
      package: path.resolve("packages", name, "package.json"),
      token: process.env.NPM_TOKEN,
      access: "public"
    });
  });
}
publish();
