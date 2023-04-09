import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { avuePatch } from "@yusui/plugins";

export default defineConfig({
  plugins: [Vue(), avuePatch()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
