<script setup lang="ts">
import type { AvueCrudColumn } from '@smallwei/avue'

import { computed } from 'vue'

const props = defineProps<{
  modelValue: any
  column: AvueCrudColumn
  tableData: { row: any }
}>()

const value = computed(() => {
  const formatter = props.column?.formatter
  if (formatter)
    return formatter(props.tableData.row, props.modelValue, props.column.label!, [])
  else
    return props.modelValue
})
</script>

<template>
  <span>{{ value }}</span>
</template>
