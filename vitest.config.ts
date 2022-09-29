import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    plugins: [Vue()],
    resolve: {
      alias: [],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"]
    }
  };
});
