import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import fs from "fs-extra";

const input = {
  components: path.resolve(__dirname, "packages/components/index.ts"),
  composables: path.resolve(__dirname, "packages/composables/index.ts"),
  plugins: path.resolve(__dirname, "packages/plugins/index.ts"),
  types: path.resolve(__dirname, "packages/types/index.ts"),
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
  return {
    plugins: [Vue()],
    resolve: {
      alias
    },
    build: {
      lib: {
        entry: "",
        fileName: "index",
        formats: []
      },
      rollupOptions: {
        external: [/@yusui/, /lodash/, "vue", "element-plus", "@vueuse/core"],
        input,
        output: [
          // {
          //   inlineDynamicImports: false,
          //   entryFileNames: "[name]/dist/index.umd.js",
          //   format: "umd",
          //   dir: "./"
          // },
          {
            entryFileNames: "packages/[name]/dist/index.mjs",
            format: "es",
            dir: "./"
          },
          {
            entryFileNames: "packages/[name]/dist/index.js",
            exports: "named",
            format: "cjs",
            dir: "./"
          }
        ]
      }
    }
  };
});
