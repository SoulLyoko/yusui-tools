# setupRouterComponents

自动注册路由组件的名称

## Usage

:::code-group

```ts [main.ts]
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { setupRouterComponents } from '@yusui/plugins'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes(routes) {
    return setupLayouts(setupRouterComponents(routes))
  },
})
```

:::
