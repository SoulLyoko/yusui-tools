<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'
import type { PropType } from 'vue'

import { findTree } from '@yusui/utils'
import { computed, ref, useAttrs, watch } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number, Array] as PropType<string | number | string[] | number[]> },
  dic: { type: Array as PropType<DicItem[]>, default: () => [] },
})
const emit = defineEmits(['update:modelValue', 'change'])

const selectedLabel = computed(() => {
  // eslint-disable-next-line eqeqeq
  return findTree(props.dic, e => e.value == props.modelValue)?.label ?? ''
})

const pickerRef = ref()
watch(
  () => [props.dic, pickerRef.value],
  ([dic, picker]) => {
    if (!dic?.length || !picker)
      return
    function setColumns(list: DicItem[], index: number) {
      picker.setColumnValues(index, list)
      if (list[0]?.children)
        setColumns(list[0].children, index + 1)
    }
    setColumns(dic, 0)
  },
  { immediate: true },
)

function onChange(e: any) {
  const { columnIndex, value } = e
  if (value[columnIndex]?.children)
    pickerRef.value.setColumnValues(columnIndex + 1, [...value[columnIndex].children])
}

const attrs = useAttrs()
const show = ref(false)
function onShow() {
  if (attrs.disabled)
    return
  show.value = true
}
function onConfirm({ value }: any) {
  emit('update:modelValue', value[0]?.value)
  emit('change', value[0]?.value)
  show.value = false
}
</script>

<template>
  <u-input
    v-bind="$attrs"
    type="text"
    :model-value="selectedLabel"
    suffix-icon="arrow-right"
    readonly
    @tap="onShow"
  />
  <u-picker
    ref="pickerRef"
    close-on-click-overlay
    v-bind="$attrs"
    :show="show"
    key-name="label"
    @change="onChange"
    @confirm="onConfirm"
    @cancel="show = false"
    @close="show = false"
  />
</template>
