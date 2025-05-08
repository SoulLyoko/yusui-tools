<script setup lang="ts">
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { unifiedMergeView } from '@codemirror/merge'
import { oneDark } from '@codemirror/theme-one-dark'
import { computed, useAttrs } from 'vue'
import { Codemirror } from 'vue-codemirror'

const props = defineProps<{
  modified?: string
  original?: string
  width?: string | number
  height?: string | number
}>()

const attrs = useAttrs()
const editorProps = computed(() => {
  const isDark = document.documentElement.className.includes('dark')
  return {
    modelValue: props.modified,
    autoDestroy: true,
    disabled: true,
    extensions: [
      json(),
      javascript(),
      isDark ? oneDark : { extension: [] },
      unifiedMergeView({ original: props.original ?? '', mergeControls: false }),
    ],
    ...attrs,
  }
})
</script>

<template>
  <Codemirror :style="{ width, height }" v-bind="editorProps" />
</template>
