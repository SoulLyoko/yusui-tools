# uniUIPatch

A vite plugin for fixing `@dcloudio/uni-ui`'s bug.

## Usage

```js
// vite.config.js
import uni from "@dcloudio/vite-plugin-uni";
import { uniUIPatch } from "@yusui/plugins";

export default {
  plugins: [uni(), uniUIPatch()]
};
```
