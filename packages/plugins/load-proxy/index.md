# loadProxy

## Usage

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

---

```sh
# .env.development

# VITE_PROXY=[[prefix,target,rewrite?]]
VITE_PROXY=[["/api","http://127.0.0.1:8080",true],["/apis","https://127.0.0.1:8081"]]
```

will transform to

```js
{
  "/api": {
    "changeOrigin": true,
    "rewrite": path => path.replace(new RegExp("^/api"), ""),
    "target": "http://127.0.0.1:8080",
    "ws": true,
  },
  "/apis": {
    "changeOrigin": true,
    "secure": true,
    "target": "https://127.0.0.1:8081",
    "ws": true,
  },
}
```
