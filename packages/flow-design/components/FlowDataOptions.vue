<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'

import { ProDict } from '@yusui/components'
import { computed } from 'vue'

import { useInjectState } from '../composables/state'

const props = defineProps<{ dicData?: DicItem[], dataKey?: string }>()

const { dataOptions } = useInjectState()
const dic = computed<DicItem[]>(() => {
  // @ts-ignore
  return dataOptions.value?.[props.dataKey] ?? []
})
</script>

<template>
  <ProDict :dic-data="dic" clearable />
</template>
