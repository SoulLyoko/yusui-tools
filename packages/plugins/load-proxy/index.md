# loadProxy

## Usage

```sh
// *.env
VITE_PROXY=[["/api","http://127.0.0.1:8888",true]
```

```js
// vite.config.js
import { defineConfig, loadEnv } from "vite";
import { loadProxy } from "@yusui/plugins";

export default defineConfig(mode => {
  const { VITE_PROXY } = loadEnv(mode, "./");
  const proxy = VITE_PROXY ? loadProxy(VITE_PROXY) : {};
  return {
    server: {
      proxy
    }
  };
});
```
