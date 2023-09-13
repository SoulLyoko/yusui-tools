<script setup lang="ts">
import type { TurboData } from '../types'

import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { Editor, useMonaco } from '@guolao/vue-monaco-editor'

const props = defineProps<{
  /** 流程图数据 */
  modelValue?: TurboData
  visible?: boolean
}>()
const emit = defineEmits(['save'])
const vModels = useVModels(props)
const { modelValue, visible } = vModels as Required<typeof vModels>

const { monacoRef, unload } = useMonaco()
onUnmounted(() => !monacoRef.value && unload())

const jsonForEdit = ref('')
function onSave() {
  const data = JSON.parse(jsonForEdit.value)
  modelValue.value = data
  emit('save', data)
  visible.value = false
}
watchEffect(() => {
  jsonForEdit.value = JSON.stringify(modelValue.value, null, 2)
})

const editorProps = computed(() => {
  return {
    defaultLanguage: 'json',
    options: {
      theme: document.documentElement.className.includes('dark') ? 'vs-dark' : 'light',
      minimap: {
        enable: true,
      },
    } as any,
  }
})
</script>

<template>
  <el-drawer v-model="visible" size="50%">
    <template #header>
      <span>编辑JSON</span>
    </template>
    <Editor v-model:value="jsonForEdit" width="100%" height="100%" v-bind="editorProps" />
    <el-button type="primary" icon="el-icon-check" style="position:absolute;bottom:20px;right:20px" @click="onSave">
      保存
    </el-button>
  </el-drawer>
</template>
