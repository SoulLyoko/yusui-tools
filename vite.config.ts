import path from "path";
import { execSync } from "child_process";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import fs from "fs-extra";

const external = [
  /@yusui/,
  /lodash/,
  "vue",
  "element-plus",
  "@vueuse/core",
  "@dcloudio/uni-app",
  /dayjs/,
  "file-saver",
  "@iconify/vue",
  "js-cookie",
  "mitt",
  "fs",
  "path",
  /@logicflow/,
  "vuedraggable",
  "@smallwei/avue",
  "axios"
];
const input = {
  "form-design": path.resolve(__dirname, "packages/form-design/index.ts"),
  "flow-design": path.resolve(__dirname, "packages/flow-design/index.ts"),
  "flow-pages": path.resolve(__dirname, "packages/flow-pages/index.ts"),
  components: path.resolve(__dirname, "packages/components/index.ts"),
  composables: path.resolve(__dirname, "packages/composables/index.ts"),
  plugins: path.resolve(__dirname, "packages/plugins/index.ts"),
  types: path.resolve(__dirname, "packages/types/index.ts"),
  "uni-composables": path.resolve(__dirname, "packages/uni-composables/index.ts"),
  "uni-utils": path.resolve(__dirname, "packages/uni-utils/index.ts"),
  utils: path.resolve(__dirname, "packages/utils/index.ts")
};
export const alias = Object.entries(input).map(([name, path]) => ({ find: `@yusui/${name}`, replacement: path }));

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    fs.removeSync("dist");
    Object.keys(input).forEach(name => {
      fs.removeSync(path.join("packages", name, "dist"));
    });
  }
  execSync("pnpm copy:utils");
  return {
    plugins: [Vue()],
    resolve: {
      alias
    },
    build: {
      lib: {
        entry: input
      },
      rollupOptions: {
        external,
        output: [
          // {
          //   inlineDynamicImports: true,
          //   entryFileNames: "index.umd.js",
          //   file: input.utils,
          //   format: "umd",
          //   dir: "dist"
          // },
          {
            preserveModules: true,
            preserveModulesRoot: "dist",
            entryFileNames(chunkInfo) {
              return chunkInfo.isEntry ? "[name]/index.mjs" : "[name].mjs";
            },
            format: "es",
            dir: "dist"
          },
          {
            preserveModules: true,
            preserveModulesRoot: "dist",
            entryFileNames(chunkInfo) {
              return chunkInfo.isEntry ? "[name]/index.cjs" : "[name].cjs";
            },
            exports: "named",
            format: "cjs",
            dir: "dist"
          }
        ]
      }
    }
  };
});
