# FlowDesign

## 安装

```bash
npm i @yusui/flow-design
```

## 使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FlowDesign, defaultGraphData, defaultOptions } from '@yusui/flow-design'
import '@yusui/flow-design/dist/styles/index.scss'

const graphData = ref(defaultGraphData())
const formOptions = defaultOptions
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" />
</template>
```
