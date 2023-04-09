import path from "path";

import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { uniPages, uviewPatch } from "@yusui/plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uniPages({
      pagesDir: path.resolve(__dirname, "src/pages"),
      pagesJsonPath: path.resolve(__dirname, "src/pages.json"),
      defaultConfigPath: path.resolve(__dirname, "src/pages.default.json")
    }),
    uni(),
    uviewPatch()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
  // optimizeDeps: {
  //   include: ["dayjs"]
  // }
});
