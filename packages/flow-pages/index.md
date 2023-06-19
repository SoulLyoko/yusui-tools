# FlowPages

## Install

```bash
pnpm i @yusui/flow-pages @yusui/flow-design @yusui/form-design
```

## Usage

:::code-group

```ts [main.ts]
import FlowPages, { FlowForm } from '@yusui/flow-pages'
import { FlowDesign } from '@yusui/flow-design'
import { FormDesign } from '@yusui/form-design'
import '@yusui/flow-design/dist/styles/index.css'
import '@yusui/form-design/dist/styles/index.css'

import { request } from '@/api/request'

app.use(FlowPages, {
  FlowDesign,
  FormDesign,
  FlowForm,
  request,
  userInfo: { userId: 'xxx' }, // or: () => storage.get('user')
  upload: {
    action: '/xxx',
    headers: { Authorization: 'xxx' }, // or: ()=> ({ Authorization: storage.get('token') })
    download: row => window.open(row.fileUrl),
    preview: row => window.open(row.fileUrl),
    props: {}
  },
})
```

```ts [vite.config.ts]
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['@logicflow/core', '@antv/g-webgpu', 'vuedraggable'],
    exclude: ['@yusui/flow-pages'],
  }
})
```

:::



## Type Definitions

<<< @/flow-pages/types/config.ts
