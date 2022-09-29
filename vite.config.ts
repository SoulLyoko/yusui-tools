import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "",
      fileName: "index",
      formats: []
    },
    rollupOptions: {
      external: /@yusui/,
      input: {
        composables: path.resolve(__dirname, "packages/composables/src/index.ts"),
        utils: path.resolve(__dirname, "packages/utils/src/index.ts")
      },
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
          format: "cjs",
          dir: "./"
        }
      ]
    }
  }
});
