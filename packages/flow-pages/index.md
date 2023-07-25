# FlowPages

<script setup lang="ts">
import {useStorage} from '@vueuse/core'
const useFlowFormType = useStorage('useFlowFormType','drawer')
function onChange(){
  location.reload()
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

:::code-group

```ts [main.ts]
import FlowPages, { CONFIG_DEFAULT, FlowForm } from '@yusui/flow-pages'
import { FlowDesign } from '@yusui/flow-design'
import { FormDesign } from '@yusui/form-design'
import '@yusui/flow-design/dist/styles/index.css'
import '@yusui/form-design/dist/styles/index.css'

import { request } from '@/api/request'

const importedForms = import.meta.glob('../custom-form/**/*.vue')
const customForm = Object.fromEntries(Object.entries(importedForms).map(([key, value]) => [key.replace('../custom-form/', ''), value]))

app.use(FlowPages, {
  FlowDesign, // 可传入自己扩展的 FlowDesign 组件
  FormDesign, // 可传入自己扩展的 FormDesign 组件
  FlowForm, // 可传入自己扩展的 FlowForm 组件
  tabs: CONFIG_DEFAULT.tabs, // 可自行扩展 FlowForm 的 tabs
  request, // 请求实例
  userInfo: { userId: 'xxx' }, // or: () => storage.get('user')
  customForm, // 自定义的流程表单
  useFlowFormOptions: { // 覆盖useFlowForm的默认配置
    type: 'drawer', // 'drawer'|'dialog'|'window'
    // window: ['/flow-form','flow-form','left=0,top=0,width=1600,height=900']
  },
  upload: { // 上传配置
    action: '/xxx', // 文件上传地址
    headers: { Authorization: 'xxx' }, // or: ()=> ({ Authorization: storage.get('token') })
    download: row => window.open(row.fileUrl), // 自行实现下载方法
    preview: row => window.open(row.fileUrl), // 自行实现预览方法
    props: {} // 上传接口字段映射
  },
})
```

```ts [vite.config.ts]
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@yusui/flow-pages'],
  }
})
```

:::

## 类型定义

<<< @/flow-pages/types/config.ts
