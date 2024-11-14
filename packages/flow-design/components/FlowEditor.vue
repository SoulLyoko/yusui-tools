<script setup lang="ts">
import type { TurboData } from '../types'

import { Editor, useMonaco } from '@guolao/vue-monaco-editor'
import { useFileDialog, useVModels } from '@vueuse/core'
import { ElMessageBox, ElOption, ElSelect } from 'element-plus'
import fileSaver from 'file-saver'
import { computed, h, onUnmounted, ref, watchEffect } from 'vue'

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
  const data: TurboData = JSON.parse(jsonForEdit.value)
  const excludeProperties = ['id', 'name', 'desc', 'x', 'y', 'text', 'width', 'height', 'startPoint', 'endPoint', 'pointsList']
  let keys = data.flowElementList?.map(e => Object.keys(e.properties ?? {})).flat().filter(e => !excludeProperties.includes(e))
  keys = [...new Set(keys)]
  const checked = ref<string[]>([])
  await ElMessageBox({
    title: '请选择或输入重置的属性',
    message: () =>
      h(ElSelect, {
        'multiple': true,
        'allowCreate': true,
        'filterable': true,
        'clearable': true,
        'modelValue': checked.value,
        'onUpdate:modelValue': val => checked.value = val,
        'style': 'width: 400px',
      }, () => keys?.map(item => h(ElOption, { label: item, value: item }))),
  })
  data.flowElementList?.forEach((item) => {
    checked.value.forEach((value) => {
      delete item.properties?.[value]
    })
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
  fileSaver.saveAs(file)
}
</script>

<template>
  <el-drawer v-model="visible" size="50%">
    <template #header>
      <span>编辑配置</span>
      <el-space>
        <el-button type="primary" icon="el-icon-refresh" @click="handleResetProperties">
          清空配置属性
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
