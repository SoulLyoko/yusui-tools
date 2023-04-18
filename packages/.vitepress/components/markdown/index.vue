<script setup lang="ts">
import { computed } from 'vue'

/**
 * Usage:
 * ```
 * <markdown path="packages/xxx/xxx.md" />
 * <markdown path="README.md" />
 * ```
 */
const props = defineProps({
  path: { type: String },
})
const rootMds = import.meta.glob('/../*.md', { eager: true })
const packagesMds = import.meta.glob('/**/*.md', { eager: true })
const mds = Object.fromEntries(
  Object.entries({ ...rootMds, ...packagesMds }).map(([k, v]) => {
    if (k.startsWith('../'))
      k = k.replace('../', '')
    else if (k.startsWith('/'))
      k = k.replace('/', 'packages/')

    return [k, v as { default: any }]
  }),
)
const is = computed(() => {
  return mds[props.path!]?.default
})
</script>

<script lang="ts">
export default { name: 'Markdown' }
</script>

<template>
  <component :is="is" />
</template>
