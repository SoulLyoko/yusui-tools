# createEnvDts

## Usage

```js
// vite.config.js
import { defineConfig } from "vite";
import { createEnvDts } from "@yusui/plugins";

export default defineConfig(mode => {
  return {
    plugins:[createEnvDts()]
  };
});
```

---

```sh
# .env.development

# VITE_PROXY=[[prefix,target,rewrite?]]
VITE_PROXY=[["/api","http://127.0.0.1:8080",true],["/apis","https://127.0.0.1:8081"]]
```

file generated

```ts
```
