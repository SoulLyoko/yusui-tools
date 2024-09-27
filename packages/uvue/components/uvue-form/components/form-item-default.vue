<script setup lang="ts">
import { useAttrs } from 'vue'

import { dateTypes, dicTypes, inputTypes } from '../../../constants'

const emit = defineEmits(['update:modelValue'])

const attrs: Record<string, any> = useAttrs()

function onChange(value: any) {
  attrs.change?.({ value })
}
</script>

<template>
  <!-- 默认的表单项 -->
  <u-input
    v-if="inputTypes.includes($attrs.type as any)"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-datetime-picker
    v-if="dateTypes.includes($attrs.type as any)"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-dict
    v-if="dicTypes.includes($attrs.type as any)"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />

  <u-textarea
    v-if="$attrs.type === 'textarea'"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />
</template>
