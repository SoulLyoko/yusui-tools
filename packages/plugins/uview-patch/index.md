# uviewPatch

A vite plugin for fixing `uview-plus`'s bug.

## Usage

```js
// vite.config.js
import uni from "@dcloudio/vite-plugin-uni";
import { uviewPatch } from "@yusui/plugins";

export default {
  plugins: [uni(), uviewPatch()]
};
```
