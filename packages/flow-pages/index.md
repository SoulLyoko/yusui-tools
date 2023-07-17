# FlowPages

## 安装

```bash
pnpm i @yusui/flow-pages @yusui/flow-design @yusui/form-design
```

## 使用

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
  upload: { // 上传配置
    action: '/xxx', // 文件上传地址
    headers: { Authorization: 'xxx' }, // or: ()=> ({ Authorization: storage.get('token') })
    download: row => window.open(row.fileUrl), // 自行实现下载方法
    preview: row => window.open(row.fileUrl), // 自行实现预览方法
    props: {}
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
