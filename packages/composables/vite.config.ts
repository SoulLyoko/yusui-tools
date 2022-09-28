import path from "path";

import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: pkg.alias,
      formats: ["es", "cjs", "umd"],
      fileName: "index"
    }
  }
});
