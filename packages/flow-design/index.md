# FlowDesign

## 安装

```bash
pnpm i @yusui/flow-design
```

## 使用

```vue
<script setup lang="ts">
import { defaultGraphData, defaultOptions, FlowDesign } from '@yusui/flow-design'
import '@yusui/flow-design/dist/index.css'
import { ref } from 'vue'

const graphData = ref(defaultGraphData())
const formOptions = defaultOptions
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" />
</template>
```
