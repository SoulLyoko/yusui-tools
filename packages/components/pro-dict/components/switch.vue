<script setup lang="ts">
import type { ProDictProps } from '../types'

import { computed, useAttrs } from 'vue'
import { useVModels } from '@vueuse/core'
import { useDict } from '@yusui/composables'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, loading, getLabel, getValue } = useDict(props)

const attrs = useAttrs()
const switchProps = computed(() => {
  const [inactiveItem, activeItem] = data.value ?? []
  return {
    ...attrs,
    loading: loading.value,
    inactiveText: getLabel(inactiveItem),
    inactiveValue: getValue(inactiveItem),
    inactiveColor: inactiveItem?.color,
    inactiveIcon: inactiveItem?.icon,
    activeText: getLabel(activeItem),
    activeValue: getValue(activeItem),
    activeColor: activeItem?.color,
    activeIcon: activeItem?.icon,
  } as any
})
</script>

<template>
  <el-switch v-model="modelValue" v-bind="switchProps" />
</template>
