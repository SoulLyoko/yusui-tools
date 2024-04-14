<script setup lang="ts">
import type { TurboData } from '../types'

import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { useFileDialog, useVModels } from '@vueuse/core'
import { Editor, useMonaco } from '@guolao/vue-monaco-editor'
import { saveAs } from 'file-saver'

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

function handleResetAssignee() {
  modelValue.value?.flowElementList?.forEach((item) => {
    if (item.properties?.assignee)
      item.properties.assignee = []
  })
  modelValue.value = { ...modelValue.value }
}
function handleResetButton() {
  modelValue.value?.flowElementList?.forEach((item) => {
    if (item.properties?.button)
      item.properties.button = []
  })
  modelValue.value = { ...modelValue.value }
}
function handleResetFormProperty() {
  modelValue.value?.flowElementList?.forEach((item) => {
    if (item.properties?.formProperty)
      item.properties.formProperty = []
  })
  modelValue.value = { ...modelValue.value }
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
        <el-dropdown>
          <el-button type="primary" icon="el-icon-refresh">
            重置字段
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item disabled>
                <el-text tag="strong">
                  重置后将实时生效
                </el-text>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-avatar" @click="handleResetAssignee">
                重置人员配置
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-info-filled" @click="handleResetButton">
                重置按钮配置
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-list" @click="handleResetFormProperty">
                重置表单配置
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

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
