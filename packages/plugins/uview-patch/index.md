# uviewPatch

修复 `uview-plus` 的 bug.

## Usage

::: code-group

```js [vite.config.js]
import uni from "@dcloudio/vite-plugin-uni";
import { uviewPatch } from "@yusui/plugins";

export default {
  plugins: [uni(), uviewPatch()]
};
```

:::
