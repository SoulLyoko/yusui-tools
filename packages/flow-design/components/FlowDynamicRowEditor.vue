<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'

import { computed, ref, watchEffect } from 'vue'
import { Editor } from '@guolao/vue-monaco-editor'

const props = defineProps<{
  tableData?: { row: any }
}>()

const editorValue = ref('')
watchEffect(() => {
  editorValue.value = JSON.stringify(props.tableData?.row ?? {}, null, 2)
})

const editorProps = computed(() => {
  return {
    defaultLanguage: 'json',
    options: { lineNumbers: 'off' as const },
    onMount: onEditorMount,
  }
})
function onEditorMount(editor: MonacoEditor.ICodeEditor) {
  editor.onDidBlurEditorText(() => {
    Object.assign(props.tableData!.row, JSON.parse(editorValue.value))
  })
}
</script>

<template>
  <el-tooltip trigger="click" effect="light">
    <el-button>编辑</el-button>
    <template #content>
      <Editor v-model:value="editorValue" v-bind="editorProps" width="400px" height="300px" />
    </template>
  </el-tooltip>
</template>
