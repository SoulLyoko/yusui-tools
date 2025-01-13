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

const defaultValue = computed(() => props.modelValue || Date.now())

const formatMap = {
  'date': 'YYYY-MM-DD',
  'time': 'HH:mm:ss',
  'datetime': 'YYYY-MM-DD HH:mm:ss',
  'year-month': 'YYYY-MM',
}

const attrs = useAttrs()
const show = ref(false)
function onShow() {
  if (attrs.disabled)
    return
  show.value = true
}
function onConfirm({ value, mode }: { value: number, mode: keyof typeof formatMap }) {
  const f = attrs.valueFormat || formatMap[mode]
  const d = dayjs(value).format(f as string)
  emit('update:modelValue', d)
  emit('change', d)
  show.value = false
}
</script>

<template>
  <u-input
    v-bind="$attrs"
    type="text"
    :model-value="modelValue"
    suffix-icon="arrow-right"
    readonly
    @tap="onShow"
  />
  <u-datetime-picker
    v-bind="$attrs"
    :model-value="defaultValue"
    :show="show"
    :mode="type"
    close-on-click-overlay
    @cancel="show = false"
    @close="show = false"
    @confirm="onConfirm as any"
  />
</template>
