<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'

import { computed } from 'vue'

import { useInjectState } from '../composables/state'

const props = defineProps<{
  /** 过滤出节点类型 */
  filterType?: string | string[]
  dic?: DicItem[]
}>()

const { lf } = useInjectState()

const nodesDic = computed(() => {
  return lf.value?.graphModel.nodes
    .filter(node => (props.filterType ? props.filterType.includes(node.type) : true))
    .map((node) => {
      return { label: node.text.value, value: node.id, desc: node.id }
    })
})
</script>

<template>
  <avue-select :dic="nodesDic" />
</template>
