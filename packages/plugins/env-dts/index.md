# createEnvDts

## Usage

```sh
# .env
VITE_TEST=test
```

```js
// vite.config.ts
import { createEnvDts } from "@yusui/plugins";

export default {
  plugins: [createEnvDts()]
};
```

## How It Works

```sh
# .env
VITE_TEST=test
```

dts file generated

```ts
// node_modules/@types/env-dts/index.d.ts
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  VITE_TEST: string;
}
```
