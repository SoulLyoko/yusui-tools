# FlowPages

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useConfigProvider } from '@yusui/flow-pages'

const useFlowFormType = useStorage('useFlowFormType','drawer')
function onChange(){
  useConfigProvider({
    useFlowFormOptions: {
      type: useFlowFormType.value
    }
  })
}
</script>

<span>设置文档中流程表单的弹窗类型：</span>
<el-radio-group v-model="useFlowFormType" @change="onChange">
  <el-radio label="drawer"></el-radio>
  <el-radio label="dialog"></el-radio>
  <el-radio label="window"></el-radio>
</el-radio-group>

## 安装

```bash
pnpm i @yusui/flow-pages @yusui/flow-design @yusui/form-design
```

## 使用

:::tip
FlowPages 以 <u>[lodash.merge](https://www.lodashjs.com/docs/lodash.merge)</u> 的形式将传入配置和默认配置进行合并
:::


```ts
// main.ts
import FlowPages, { CONFIG_DEFAULT, FlowForm } from '@yusui/flow-pages'
import { FlowDesign } from '@yusui/flow-design'
import { FormDesign } from '@yusui/form-design'
import '@yusui/flow-design/dist/styles/index.css'
import '@yusui/form-design/dist/styles/index.css'

import { request } from '@/api/request'

// 接下
```

<<< @/.vitepress/theme/index.ts#install

```ts 
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@yusui/flow-pages'],
  }
})
```

## 默认配置

<<< @/flow-pages/constants/config.ts


## 类型定义

<<< @/flow-pages/types/config.ts
