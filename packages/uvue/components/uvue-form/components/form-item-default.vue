<script setup lang="ts">
import { useAttrs } from 'vue'

const emit = defineEmits(['update:modelValue'])

const inputTypes = ['input', 'text', 'password', 'number'] // 显示input组件的类型
const pickerTypes = ['date', 'time', 'datetime', 'year-month'] // 显示picker组件的类型
const dicTypes = ['select', 'cascader', 'checkbox', 'radio', 'switch'] // 显示picker组件的类型

const attrs: Record<string, any> = useAttrs()

function onChange(value: any) {
  attrs.change?.({ value })
}
</script>

<template>
  <!-- 默认的表单项 -->
  <u-input
    v-if="inputTypes.includes($attrs.type as string)"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-datetime-picker
    v-if="pickerTypes.includes($attrs.type as string)"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-dict
    v-if="dicTypes.includes($attrs.type as string)"
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
