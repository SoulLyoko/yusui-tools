<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'
import type { PropType } from 'vue'

import { computed, ref, useAttrs } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number] },
  dic: { type: Array as PropType<{ label?: string, value?: string }[]>, default: () => [] },
  allowCreate: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'change'])

const defaultIndex = computed(() => {
  // eslint-disable-next-line eqeqeq
  const index = Math.max(props.dic.findIndex(e => e.value == props.modelValue), 0)
  return [index]
})

const selectedLabel = computed(() => {
  // eslint-disable-next-line eqeqeq
  return props.dic?.find(e => e.value == props.modelValue)?.label ?? props.modelValue ?? ''
})

const columns = computed(() => {
  return props.dic?.length ? [props.dic] : []
})

const attrs = useAttrs()
const show = ref(false)
function onShow() {
  if (attrs.disabled)
    return
  show.value = true
}
function onConfirm({ value }: { value: DicItem[] }) {
  emit('update:modelValue', value[0]?.value)
  emit('change', value[0]?.value)
  show.value = false
}
function onInput(value: any) {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <u-input v-if="allowCreate" v-bind="$attrs" type="text" :model-value="selectedLabel" @update:model-value="onInput">
    <template #suffix>
      <u-icon name="arrow-right" @tap="onShow" />
    </template>
  </u-input>
  <u-input
    v-else
    v-bind="$attrs"
    type="text"
    :model-value="selectedLabel"
    suffix-icon="arrow-right"
    readonly
    @tap="onShow"
  />
  <u-picker
    close-on-click-overlay
    v-bind="$attrs"
    :show="show"
    :columns="columns"
    :default-index="defaultIndex"
    key-name="label"
    @confirm="onConfirm"
    @cancel="show = false"
    @close="show = false"
  />
</template>
