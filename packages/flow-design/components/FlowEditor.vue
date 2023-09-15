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
const emit = defineEmits(['confirm'])
const vModels = useVModels(props)
const { modelValue, visible } = vModels as Required<typeof vModels>

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
</script>

<template>
  <el-drawer v-model="visible" size="50%">
    <template #header>
      <span>编辑JSON</span>
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

      <el-button type="primary" icon="el-icon-check" style="margin:0 10px" @click="onConfirm">
        确定
      </el-button>
    </template>

    <Editor v-model:value="jsonForEdit" width="100%" height="100%" v-bind="editorProps" />
  </el-drawer>
</template>
