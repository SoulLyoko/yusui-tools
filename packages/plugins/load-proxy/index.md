# loadProxy

只需要通过配置 `.env` 就可以为 vite 开发服务添加代理配置

## Usage

:::code-group

```js [vite.config.js]
import { loadProxy } from '@yusui/plugins'

export default {
  /** default key is "VITE_PROXY" */
  plugins: [loadProxy({ key: 'VITE_PROXY' })]
}
```

:::

:::code-group

```sh [.env.development]
VITE_PROXY=[["/api","http://127.0.0.1:8080",true],["/apis","https://127.0.0.1:8081"]]
```

:::

## How It Works

```sh
# VITE_PROXY=[prefix,target,rewrite?][]
VITE_PROXY=[["/api","http://127.0.0.1:8080",true],["/apis","https://127.0.0.1:8081"]]
```

will transform to

```js
defineConfig({
  server: {
    proxy: {
      '/api': {
        changeOrigin: true,
        rewrite: path => path.replace(new RegExp('^/api'), ''),
        target: 'http://127.0.0.1:8080',
        ws: true,
      },
      '/apis': {
        changeOrigin: true,
        secure: true,
        target: 'https://127.0.0.1:8081',
        ws: true,
      },
    }
  }
})
```
