# uniPages

扩展 uni-app \<page-meta\> 功能，自动生成 pages.json

## Usage

::: code-group

```js [vite.config.js]
import uni from "@dcloudio/vite-plugin-uni";
import { uniPages } from "@yusui/plugins";

export default {
  plugins: [
    uniPages({
      pagesDir: path.resolve(__dirname, "src/pages"),
      pagesJsonPath: path.resolve(__dirname, "src/pages.json"),
      defaultConfigPath: path.resolve(__dirname, "src/pages.default.json")
    }),
    uni()
  ]
};
```

:::

::: code-group

<<< @/plugins/uni-pages/src/pages/hello/hello.vue [src/pages/hello/hello.vue]

<<< @/plugins/uni-pages/src/pages/world/world.vue [src/pages/world/world.vue]

<<< @/plugins/uni-pages/src/pages.default.json [src/pages.default.json]

:::

生成 pages.json

::: code-group

<<< @/plugins/uni-pages/src/pages.json [src/pages.json]

:::
