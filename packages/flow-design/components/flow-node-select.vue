<script setup lang="ts">
import { computed } from 'vue'

import { useInjectState } from '../composables/state'

const props = defineProps<{ filterType?: string | string[]; dic?: any[] }>()

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
