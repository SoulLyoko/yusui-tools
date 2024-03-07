# Mix

集中式的插件管理

## Usage

:::code-group

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import { mixPlugins } from '@yusui/mix/plugins'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': 'src',
      },
    },
    plugins: [...mixPlugins()],
  }
})
```

:::

:::code-group

```ts [main.ts]
import { createApp } from 'vue'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { mixModules, setupRouterComponents } from '@yusui/mix/modules'

import App from './App.vue'

import 'uno.css'

const app = createApp(App)
app.use(mixModules({
  router: {
    routes: setupLayouts(setupRouterComponents(routes)),
  },
}))
app.mount('#app')
```

:::
