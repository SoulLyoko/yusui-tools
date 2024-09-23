<script setup lang="ts">
import type { EditorProps } from '@guolao/vue-monaco-editor'
import type { editor as MonacoEditor } from 'monaco-editor'

import { Editor, useMonaco } from '@guolao/vue-monaco-editor'
import { computed, onUnmounted, ref, useAttrs } from 'vue'

import { jsonParse, jsonStringify } from '../../utils'

const props = defineProps<{
  modelValue?: any
  valueType?: string
  options?: EditorProps['options']
  tooltip?: boolean
  dialog?: boolean
  fullscreen?: boolean
  width?: string | number
  height?: string | number
  btnText?: string
}>()
const emit = defineEmits(['update:modelValue'])

const { monacoRef, unload } = useMonaco()
onUnmounted(() => !monacoRef.value && unload())

const editorValue = computed<string>(() => {
  const value = props.modelValue
  if (typeof value === 'string')
    return value
  else if (props.valueType === 'function' && typeof value === 'function')
    return value ? value.toString() : ''
  else if (['object', 'array'].includes(props.valueType!) && typeof value === 'object')
    return value ? jsonStringify(value) : ''

  return String(value ?? '')
})

const options = computed(() => {
  return {
    renderValidationDecorations: 'off' as const,
    minimap: { enabled: props.dialog || false },
    theme: document.documentElement.className.includes('dark') ? 'vs-dark' : 'light',
    ...props.options,
  }
})

const attrs = useAttrs()
const editorProps = computed(() => {
  return {
    value: editorValue.value,
    options: options.value,
    defaultLanguage: 'javascript',
    onMount: onEditorMount,
    ...attrs,
  }
})

function onEditorMount(editor: MonacoEditor.ICodeEditor) {
  editor.onDidBlurEditorText(() => {
    let val = editor.getValue()
    if (val === editorValue.value)
      return
    if (props.valueType === 'function')
      // eslint-disable-next-line no-eval
      val = eval(`${val}`)
    else if (['object', 'array'].includes(props.valueType!))
      val = jsonParse(val)
    emit('update:modelValue', val)
  })
}

const dialogVisible = ref(false)
</script>

<template>
  <el-tooltip v-if="tooltip" trigger="click" effect="light">
    <el-button>{{ btnText || "编辑代码" }}</el-button>
    <template #content>
      <Editor :width="width || '300px'" :height="height || '200px'" v-bind="editorProps" />
      <el-button text icon="el-icon-full-screen" @click="dialogVisible = true" />
    </template>
  </el-tooltip>

  <template v-else-if="dialog">
    <el-button @click="dialogVisible = true">
      {{ btnText || "编辑代码" }}
    </el-button>
  </template>

  <Editor v-else :width="width" :height="height" v-bind="editorProps" />

  <el-dialog v-if="dialog || dialogVisible" v-model="dialogVisible" :fullscreen="fullscreen" :width="width">
    <Editor width="100%" :height="height || (fullscreen ? '90vh' : '600px')" v-bind="editorProps" />
  </el-dialog>
</template>
