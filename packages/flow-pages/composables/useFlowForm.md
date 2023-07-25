# useFlowForm

在任何地方调起流程表单

## 使用

```ts
import { useFlowForm } from '@yusui/flow-pages'

const { open, close } = useFlowForm({ type: 'drawer' })
function openFlow(row: FlowOps) {
  open({
    flowKey: row.flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    onComplete() {
      close()
      getDataList()
    },
  })
}
```

## 类型定义

<<< ./flow-form.ts#types

