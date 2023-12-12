# setupExtend

支持在 script setup 上定义 `name` 和 `inheritAttrs`

## Usage

:::code-group

```js [vite.config.js]
import Vue from '@vitejs/plugin-vue'
import { setupExtend } from '@yusui/plugins'

export default {
  plugins: [Vue(), setupExtend()]
}
```

:::

## How It Works

```vue
<script setup lang="ts" name="ComponentName" inheritAttrs>
console.log('hello')
</script>
```

will transform to

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentName',
  inheritAttrs: true,
})
</script>

<script setup lang="ts" name="ComponentName" inheritAttrs>
console.log('hello')
</script>
```
