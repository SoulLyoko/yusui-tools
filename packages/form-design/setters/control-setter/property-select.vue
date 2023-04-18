<script setup lang="ts">
import { computed } from 'vue'
import { findTree } from '@yusui/utils'

import { useInjectState } from '../../composables'

const props = defineProps<{ tableData?: { row: any }; dic?: any }>()

const { elementTree, baseOption, resolveSettings, getResource } = useInjectState()

const dic = computed(() => {
  const findElement = findTree([elementTree.value], e => e.props?.prop === props.tableData?.row?.field)
  const settings = getResource(findElement?.name)?.settings ?? []
  return [...baseOption.value, ...resolveSettings(settings)]
    .filter(e => e.prop)
    .map(e => ({ label: e.label, value: e.prop, desc: e.prop }))
})
</script>

<template>
  <avue-select :dic="dic" allow-create filterable default-first-option />
</template>
