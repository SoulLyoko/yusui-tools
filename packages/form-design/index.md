# FormDesign

## 安装

```bash
pnpm i @yusui/form-design
```

## 使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FormDesign } from '@yusui/form-design'
import '@yusui/form-design/dist/styles/index.css'

const option = ref({})
</script>

<template>
  <FormDesign v-model="option" />
</template>
```
