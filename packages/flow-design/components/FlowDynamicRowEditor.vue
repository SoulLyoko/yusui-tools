<script setup lang="ts">
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
import { computed, ref, watchEffect } from 'vue'
import { Codemirror } from 'vue-codemirror'

const props = defineProps<{
  tableData?: { row: any }
}>()

const editorValue = ref('')
watchEffect(() => {
  editorValue.value = JSON.stringify(props.tableData?.row ?? {}, null, 2)
})

const editorProps = computed(() => {
  const isDark = document.documentElement.className.includes('dark')
  return {
    extensions: [json(), isDark ? oneDark : { extension: [] }],
    autoDestroy: true,
    onBlur: () => Object.assign(props.tableData!.row, JSON.parse(editorValue.value)),
    style: { width: '400px', height: '300px' },
  }
})
</script>

<template>
  <el-tooltip trigger="click" effect="light">
    <el-button>编辑</el-button>
    <template #content>
      <Codemirror v-model="editorValue" v-bind="editorProps" />
    </template>
  </el-tooltip>
</template>
