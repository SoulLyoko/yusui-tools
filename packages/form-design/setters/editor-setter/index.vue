<script setup lang="ts">
import type { ViewUpdate } from '@codemirror/view'

import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
import { computed, ref, useAttrs } from 'vue'
import { Codemirror } from 'vue-codemirror'

import { jsonParse, jsonStringify } from '../../utils'

const props = defineProps<{
  modelValue?: any
  valueType?: string
  tooltip?: boolean
  dialog?: boolean
  fullscreen?: boolean
  width?: string | number
  height?: string | number
  btnText?: string
  defaultValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const editorValue = computed<string>(() => {
  const value = props.modelValue
  if (typeof value === 'string')
    return value || props.defaultValue
  else if (props.valueType === 'function' && typeof value === 'function')
    return value ? value.toString() : ''
  else if (['object', 'array'].includes(props.valueType!) && typeof value === 'object')
    return value ? jsonStringify(value) : ''

  return String(value ?? '')
})
function setEditorValue(val: string) {
  if (val === editorValue.value)
    return
  if (props.valueType === 'function')
    // eslint-disable-next-line no-eval
    val = eval(`${val}`)
  else if (['object', 'array'].includes(props.valueType!))
    val = jsonParse(val)
  emit('update:modelValue', val)
}

const attrs = useAttrs()
const editorProps = computed(() => {
  const isDark = document.documentElement.className.includes('dark')
  return {
    modelValue: editorValue.value,
    extensions: [json(), javascript(), isDark ? oneDark : { extension: [] }],
    autoDestroy: true,
    onBlur: (e: ViewUpdate) => setEditorValue(e.state.doc.toString()),
    ...attrs,
  }
})

const dialogVisible = ref(false)
</script>

<template>
  <el-tooltip v-if="tooltip" trigger="click" effect="light">
    <el-button>{{ btnText || "编辑代码" }}</el-button>
    <template #content>
      <Codemirror :style="{ width: width || '300px', height: height || '200px' }" v-bind="editorProps" />
      <el-button text icon="el-icon-full-screen" @click="dialogVisible = true" />
    </template>
  </el-tooltip>

  <template v-else-if="dialog">
    <el-button @click="dialogVisible = true">
      {{ btnText || "编辑代码" }}
    </el-button>
  </template>

  <Codemirror v-else :style="{ width, height }" v-bind="editorProps" />

  <el-dialog v-if="dialog || dialogVisible" v-model="dialogVisible" :fullscreen="fullscreen" :width="width">
    <Codemirror :style="{ width: '100%', height: height || fullscreen ? '90vh' : '600px' }" v-bind="editorProps" />
  </el-dialog>
</template>
