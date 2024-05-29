<script setup lang="ts">
import type { TurboData } from '../types'

import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { useFileDialog, useVModels } from '@vueuse/core'
import { Editor, useMonaco } from '@guolao/vue-monaco-editor'
import { saveAs } from 'file-saver'
import { ElMessageBox } from 'element-plus'

const props = withDefaults(
  defineProps<{
    /** 流程图数据 */
    modelValue?: TurboData
    visible?: boolean
  }>(),
  { modelValue: () => ({}) },
)
const emit = defineEmits(['confirm'])
const { modelValue, visible } = useVModels(props)

const { monacoRef, unload } = useMonaco()
onUnmounted(() => !monacoRef.value && unload())

const jsonForEdit = ref('')
function onConfirm() {
  const data = JSON.parse(jsonForEdit.value)
  modelValue.value = data
  emit('confirm', data)
  visible.value = false
}
watchEffect(() => {
  if (visible.value) {
    jsonForEdit.value = JSON.stringify(modelValue.value, null, 2)
  }
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

async function handleResetProperties() {
  const { value } = await ElMessageBox.prompt('请输入重置的属性', '重置属性', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPlaceholder: 'features、fields、assignee、property等',
    inputPattern: /.+/,
    inputErrorMessage: '请输入属性名称',
  })
  const data: TurboData = JSON.parse(jsonForEdit.value)
  data.flowElementList?.forEach((item) => {
    delete item.properties?.[value]
  })
  jsonForEdit.value = JSON.stringify(data, null, 2)
}

const { open: handleImport, onChange: onFileChange, reset } = useFileDialog({ multiple: false, accept: '.json' })
onFileChange(async (files) => {
  if (!files?.[0])
    return
  jsonForEdit.value = await files?.[0].text() ?? ''
  reset()
})

function handleExport() {
  const file = new File([jsonForEdit.value], 'flow.json', { type: 'text/json' })
  saveAs(file)
}
</script>

<template>
  <el-drawer v-model="visible" size="50%">
    <template #header>
      <span>编辑配置</span>
      <el-space>
        <el-button type="primary" icon="el-icon-refresh" @click="handleResetProperties">
          重置配置属性
        </el-button>
        <el-button type="primary" icon="el-icon-upload" @click="handleImport()">
          导入配置
        </el-button>
        <el-button type="primary" icon="el-icon-download" @click="handleExport">
          导出配置
        </el-button>
        <el-button type="primary" icon="el-icon-check" style="margin-right:8px" @click="onConfirm">
          确定
        </el-button>
      </el-space>
    </template>

    <Editor v-model:value="jsonForEdit" width="100%" height="100%" v-bind="editorProps" />
  </el-drawer>
</template>
