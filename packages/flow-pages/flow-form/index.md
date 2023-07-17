# FlowForm

## 扩展tabs

::: code-group

```ts [main.ts]
import FlowPages, { CONFIG_DEFAULT } from '@yusui/flow-pages'

import CustomTab from '@/components/CustomTab.vue'

app.use(FlowPages, {
  tabs: [
    ...CONFIG_DEFAULT.tabs,
    // { label: '审批表单', prop: 'formTab', component: InternalForm },
    // { label: '附件资料', prop: 'fileTab', component: UploadTable },
    // { label: '流程跟踪', prop: 'trackTab', component: FlowTrack },
    { label: '自定义Tab', prop: 'customTab', component: CustomTab },
  ],
})
```

```vue [CustomTab.vue]
<script setup lang="ts">
import { useInjectState } from '@yusui/flow-pages'
import { ElMessage } from 'element-plus'

const { flowDetail, formData } = useInjectState()

function validate() {
  if (!formData.value.custom) {
    ElMessage.warning('请输入自定义值')
    return Promise.reject()
  }
}

// 验证不通过可以阻止流程的发送
defineExpose({ validate })
</script>

<template>
  <div>这是一个自定义Tab</div>
</template>
```

:::

## 自定义流程表单

::: code-group

```ts [main.ts]
const importedForms = import.meta.glob('../custom-form/**/*.vue')
const customForm = Object.fromEntries(Object.entries(importedForms).map(([key, value]) => [key.replace('../custom-form/', ''), value]))
// {
//   "test/index.vue": () => Component
//   "xxx.vue": () => Component
// }

app.use(FlowPages, {
  customForm,
})
```

```vue [../custom-form/test/index.vue]
<script setup lang="ts">
import { FlowForm } from '@yusui/flow-pages'
</script>

<template>
  <FlowForm>
    这是一个自定义表单
  </FlowForm>
</template>
```

:::


## 直接重写FlowForm(不建议)

::: code-group

```ts [main.ts]
import FlowPages from '@yusui/flow-pages'

import CustomFlowForm from '@/components/CustomFlowForm.vue'

app.use(FlowPages, {
  FlowForm: CustomFlowForm
})
```

<<< ./index.vue

:::


## 在任何地方调起流程表单

:::code-group

```ts
import { useFlowForm } from '@yusui/flow-pages'

const { open, close } = useFlowForm({ type: 'drawer' })
function openFlow(row: FlowOps | FlowCirculateOps) {
  open({
    flowKey: row.flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    debug: debugMode.value,
    circulateId: (row as FlowCirculateOps).id,
    formPath: (row as FlowOps).formPath,
    onComplete() {
      close()
      getDataList()
    },
  })
}
```

<<< ../composables/flow-form.ts

:::
