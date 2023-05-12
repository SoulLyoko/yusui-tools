# FlowPages

## Install

```bash
pnpm i @yusui/flow-pages @yusui/flow-design @yusui/form-design
```

## Usage

```ts
import FlowPages from '@yusui/flow-pages'
import { FlowModeler, FlowViewer } from '@yusui/flow-design'
import { FormDesign } from '@yusui/form-design'
import '@yusui/flow-design/dist/styles/index.css'
import '@yusui/form-design/dist/styles/index.css'

import { request } from '@/api/request'

app.use(FlowPages, {
  FlowModeler,
  FlowViewer,
  FormDesign,
  request,
  upload: {
    action: '/xxx',
    headers: { Authorization: 'xxx' },
    download: row => window.open(row.fileUrl),
    preview: row => window.open(row.fileUrl),
    props: {}
  },
})
```


## TypeDefinition

<<< @/flow-pages/types/config.ts
