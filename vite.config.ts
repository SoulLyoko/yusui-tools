import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  build: {
    lib: {
      entry: "",
      fileName: "index",
      formats: []
    },
    rollupOptions: {
      external: [/@yusui/, "vue"],
      input: {
        components: path.resolve(__dirname, "packages/components/src/index.ts"),
        composables: path.resolve(__dirname, "packages/composables/src/index.ts"),
        plugins: path.resolve(__dirname, "packages/plugins/src/index.ts"),
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
