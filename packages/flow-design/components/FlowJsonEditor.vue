<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'

import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { Editor, useMonaco } from '@guolao/vue-monaco-editor'

const props = defineProps<{
  modelValue?: any
  width?: string | number
  height?: string | number
}>()
const { modelValue } = useVModels(props)

const { monacoRef, unload } = useMonaco()
onUnmounted(() => !monacoRef.value && unload())

const editorValue = ref('')
watchEffect(() => {
  editorValue.value = JSON.stringify(modelValue.value, null, 2)
})

const editorProps = computed(() => {
  return {
    defaultLanguage: 'json',
    onMount: onEditorMount,
  }
})

function onEditorMount(editor: MonacoEditor.ICodeEditor) {
  editor.onDidBlurEditorText(() => {
    modelValue.value = JSON.parse(editorValue.value)
  })
}
</script>

<template>
  <el-tooltip trigger="click" effect="light">
    <el-button>编辑</el-button>
    <template #content>
      <Editor v-model:value="editorValue" v-bind="editorProps" :width="width || '300px'" :height="height || '200px'" />
    </template>
  </el-tooltip>
</template>
