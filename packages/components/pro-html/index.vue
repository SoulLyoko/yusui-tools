<script setup lang="ts">
import type { ProHtmlProps } from './types'

defineProps<ProHtmlProps>()
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
  <component :is="tag ?? 'div'" v-html="modelValue" />
</template>
