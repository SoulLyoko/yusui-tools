<script setup lang="ts">
defineProps<{
  modelValue?: string
  tag?: string
}>()
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
  <component :is="tag ?? 'div'" v-html="modelValue" />
</template>
