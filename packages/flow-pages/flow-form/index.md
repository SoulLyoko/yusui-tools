# FlowForm

流程表单

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

## 扩展按钮

页面 -> 流程按钮 -> 新增 -> `{ name: "自定义按钮", buttonKey: "flow_custom" }`

::: code-group

```ts [main.ts]
import FlowPages from '@yusui/flow-pages'

import customButtonHandler from './customButtonHandler.ts'

app.use(FlowPages, {
  buttonHandler: customButtonHandler
})
```

```ts [customButtonHandler.ts]
import type { ButtonHandler, FlowFormState } from '@yusui/flow-pages'

export function useButtonHandler(state: FlowFormState): ButtonHandler {
  return {
    // 自定义
    flow_custom() {
      // ...做一些自定义操作
      // 返回Promise并成功则提交流程
      return request.post('xxx/xxx', {})
    },
  }
}
```

:::

## 自定义流程表单

::: code-group

```ts [main.ts]
const importedForms = import.meta.glob('../custom-form/**/*.vue')
const customForm = Object.fromEntries(Object.entries(importedForms).map(([key, value]) => [key.replace('../custom-form/', ''), value]))
// {
//   "test/index.vue": () => Promise<Component>
//   "xxx.vue": () => Promise<Component>
// }

app.use(FlowPages, {
  customForm,
})
```
<<< @/.vitepress/custom-form/test/index.vue [custom-form/test/index.vue]

:::


## 直接重写FlowForm(不建议)

::: code-group

```ts [main.ts]
import FlowPages from '@yusui/flow-pages'

import CustomFlowForm from './CustomFlowForm.vue'

app.use(FlowPages, {
  FlowForm: CustomFlowForm
})
```

<<< ./index.vue[@yusui/flow-pages/flow-form]

:::
