<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'

import { computed } from 'vue'
import { ProDict } from '@yusui/components'

import { useInjectState } from '../composables/state'

const props = defineProps<{ dicData?: DicItem[], dataKey?: string }>()

const { dataOptions } = useInjectState()
const dic = computed(() => {
  // @ts-ignore
  return dataOptions.value?.[props.dataKey] ?? []
})
</script>

<template>
  <ProDict :dic-data="dic" clearable />
</template>
