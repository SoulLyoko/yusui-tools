<script setup lang="ts">
import { useAttrs, watch } from 'vue'

import { useConfigProvider, useDict } from '../../../composables'

const emit = defineEmits(['update:dic'])

const inputTypes = ['input', 'text', 'password', 'number'] // 显示input组件的类型
const pickerTypes = ['date', 'time', 'datetime'] // 显示picker组件的类型
const dicTypes = ['select', 'cascader', 'checkbox', 'radio', 'switch'] // 显示picker组件的类型

const attrs: Record<string, any> = useAttrs()
const dic = useDict(attrs, useConfigProvider().request)
watch(dic, val => emit('update:dic', val))

function onChange(value: any) {
  attrs.change?.({ value })
}
</script>

<template>
  <!-- 默认的表单项 -->
  <u-input
    v-if="inputTypes.includes($attrs.type as string)"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-datetime-picker
    v-if="pickerTypes.includes($attrs.type as string)"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="onChange"
  />

  <uvue-dict
    v-if="dicTypes.includes($attrs.type as string)"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="onChange"
  />

  <u-textarea
    v-if="$attrs.type === 'textarea'"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="onChange"
  />
</template>
