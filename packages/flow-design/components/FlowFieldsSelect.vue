<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'

import { computed } from 'vue'

import { useInjectState } from '../composables/state'

defineProps<{ dic?: DicItem[] }>()

const { dataOptions } = useInjectState()
const fieldsDic = computed(() => {
  return dataOptions.value?.fieldsDic ?? []
})
</script>

<template>
  <avue-select :dic="fieldsDic" />
</template>
