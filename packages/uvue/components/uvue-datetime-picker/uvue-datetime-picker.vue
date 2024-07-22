<script setup lang="ts">
import type { PropType } from 'vue'

import { computed, ref, useAttrs } from 'vue'
import dayjs from 'dayjs/esm'

const props = defineProps({
  modelValue: { type: [String, Number] as PropType<string | number> },
})
const emit = defineEmits(['update:modelValue', 'change'])

const defaultValue = computed(() => props.modelValue || Date.now())

const formatMap = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm:ss',
  datetime: 'YYYY-MM-DD HH:mm:ss',
}

const attrs = useAttrs()
const show = ref(false)
function onShow() {
  if (attrs.disabled)
    return
  show.value = true
}
function onConfirm({ value, mode }: { value: number, mode: 'date' | 'time' | 'datetime' }) {
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
    :mode="$attrs.type"
    close-on-click-overlay
    @confirm="onConfirm"
    @cancel="show = false"
    @close="show = false"
  />
</template>
