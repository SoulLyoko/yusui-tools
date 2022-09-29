import { resolve } from "path";

import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [],
    resolve: {
      alias: [],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    test: {
      globals: true,
      environment: "jsdom"
    }
  };
});
