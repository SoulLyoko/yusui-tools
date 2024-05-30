<script setup lang="ts">
import type { CheckboxValueType } from 'element-plus'

import { computed, watch } from 'vue'
import { useCycleList, useVModels } from '@vueuse/core'

const props = withDefaults(
  defineProps<{ modelValue?: CheckboxValueType }>(),
  { modelValue: '' },
)
const { modelValue } = useVModels(props)

const dic = [
  { label: '默认', value: '' },
  { label: '是', value: true },
  { label: '否', value: false },
]
const label = computed(() => {
  return dic.find(e => e.value === modelValue.value)?.label
})

const valueList: CheckboxValueType[] = dic.map(e => e.value)
const { state, next } = useCycleList(valueList)
watch(modelValue, val => state.value = val, { immediate: true })
watch(state, val => modelValue.value = val, { immediate: true })
</script>

<template>
  <span>
    <el-checkbox :model-value="!!state" :indeterminate="state === ''" :label="label" @change="next()" />
  </span>
</template>
