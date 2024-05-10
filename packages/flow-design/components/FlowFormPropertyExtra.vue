<script setup lang="ts">
import { computed } from 'vue'

import { useInjectState } from '../composables/state'

const props = defineProps<{
  tableData?: { row: any }
  width?: number | string
}>()

const form = computed({
  get() {
    return props.tableData?.row ?? {}
  },
  set(val) {
    Object.assign(props.tableData?.row, val)
  },
})

const { dataOptions } = useInjectState()

const option = computed(() => {
  return {
    span: 24,
    menuBtn: false,
    labelWidth: 'auto',
    column: dataOptions.value?.formPropertyExtra ?? [],
  }
})
</script>

<template>
  <el-popover trigger="click" :width="400">
    <template #reference>
      <el-button>更多</el-button>
    </template>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <avue-form v-model="form" :option="option" />
  </el-popover>
</template>
