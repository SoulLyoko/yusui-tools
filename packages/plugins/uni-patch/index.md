# uniPatch

修复 `uni-app` 的 bug.

## Usage

::: code-group

```js [vite.config.js]
import uni from '@dcloudio/vite-plugin-uni'
import { uniPatch } from '@yusui/plugins'

export default {
  plugins: [uni(), uniPatch()]
}
```

:::
