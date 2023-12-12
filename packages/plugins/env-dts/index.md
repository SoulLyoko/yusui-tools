# createEnvDts

为 `.env` 文件生成类型提示

## Usage

:::code-group

```ts [vite.config.ts]
import { createEnvDts } from '@yusui/plugins'

export default {
  plugins: [createEnvDts({
    // default is 'vite-env.d.ts'
    dts: 'vite-env.d.ts'
  })]
}
```

```sh [.env]
VITE_TEST=test
```

```ts [xxx.ts]
/**
 * 弹出提示：
 * ---
 * ImportMetaEnv.VITE_TEST: string
 * VITE_TEST=test
 * ---
 */
import.meta.env.VITE_TEST
```

:::

## How It Works

:::code-group

```sh [.env]
VITE_TEST=test
VITE_API_URL=http://localhost:3000
```

:::

生成 d.ts 文件

:::code-group

```ts [vite-env.d.ts]
interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
  /** VITE_TEST=test */
  VITE_TEST: string
  /** VITE_API_URL=http://localhost:3000 */
  VITE_API_URL: string
}
```

:::
