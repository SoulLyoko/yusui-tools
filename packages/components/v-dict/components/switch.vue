<script setup lang="ts">
import type { VDictProps } from '../types'

import { computed, useAttrs, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()
const { modelValue } = useVModels(props)

const { data, dictValue, loading } = useDict(props)
const { label, value } = mergeDicProps(props.props)
watchEffect(() => {
  dictValue.value = modelValue?.value
})

const switchProps = computed(() => {
  const [inactiveItem, activeItem] = data.value ?? []
  return {
    ...useAttrs(),
    loading: loading.value,
    inactiveText: inactiveItem?.[label!],
    inactiveValue: inactiveItem?.[value!],
    inactiveColor: inactiveItem?.color,
    inactiveIcon: inactiveItem?.icon,
    activeText: activeItem?.[label!],
    activeValue: activeItem?.[value!],
    activeColor: activeItem?.color,
    activeIcon: activeItem?.icon,
  } as any
})
</script>

<template>
  <el-switch v-model="modelValue" v-bind="switchProps" />
</template>
