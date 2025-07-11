<script setup lang="ts">
import type { dateTypes } from '../../constants'
import type { PropType } from 'vue'

import dayjs from 'dayjs'
import { computed, ref, useAttrs } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number] as PropType<string | number> },
  type: { type: String as PropType<typeof dateTypes[number]> },
})
const emit = defineEmits(['update:modelValue', 'change'])

const attrs = useAttrs()

// 显示格式化
const formatMap = {
  'date': 'YYYY-MM-DD',
  'time': 'HH:mm',
  'datetime': 'YYYY-MM-DD HH:mm',
  'year-month': 'YYYY-MM',
}

// 值格式化
const valueFormatMap = {
  'date': 'YYYY-MM-DD',
  'time': 'HH:mm:ss',
  'datetime': 'YYYY-MM-DD HH:mm:ss',
  'year-month': 'YYYY-MM',
}

const pickerRef = ref()

const modelValue = computed({
  get() {
    return props.modelValue ? dayjs(props.modelValue).valueOf() : undefined
  },
  set(value) {
    const minDate = pickerRef.value?.minDate
    const f = attrs.valueFormat || valueFormatMap[props.type!]
    const d = dayjs(value || minDate || undefined).format(f as string)
    emit('update:modelValue', d)
    emit('change', d)
  },
})

const format = computed(() => {
  return attrs.format || formatMap[props.type!]
})
</script>

<template>
  <u-datetime-picker v-bind="$attrs" ref="pickerRef" v-model="modelValue" :format="format" :mode="type" has-input />
</template>
