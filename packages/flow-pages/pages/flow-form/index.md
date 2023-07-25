---
aside: false
---

# PageFlowForm

## 基础用法

<PageFlowForm></PageFlowForm>

```ts
import FlowPages, { PageFlowForm, useFlowForm } from '@yusui/flow-pages'

// 添加路由
router.addRoute({
  path: '/flow-form',
  name: 'flow-form',
  component: PageFlowForm,
})
// 注册组件时配置useFlowFormOptions
app.use(FlowPages, {
  // ...
  useFlowFormOptions: {
    type: 'window',
    window: ['/flow-form'],
  },
})
// 调起流程表单
const { open, close } = useFlowForm()
open({
  flowKey,
  taskId,
  instanceId,
  onComplete() {
    close()
  },
})
```
