<script setup lang="ts">
import type { FlowTemplate } from '@yusui/flow-pages'

import { ref } from 'vue'
import { useCrud } from '@yusui/composables'
import { useConfigProvider, useFlowTemplateApi } from '@yusui/flow-pages'

import { tableOption } from './option'
import FlowDesignWrapper from '../../components/FlowDesignWrapper.vue'

const { request } = useConfigProvider()

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  handleUpdate,
} = useCrud({
  tableOption,
  crudOption: useFlowTemplateApi(request),
})
getDataList()

const dialogVisible = ref(false)
async function openDesign(row: FlowTemplate) {
  formData.value = row
  dialogVisible.value = true
}

async function handleSaveLayout() {
  await handleUpdate(
    formData.value,
    Number.NaN,
    () => (dialogVisible.value = false),
    () => {},
  )
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu="{ row }">
      <el-button type="primary" text icon="el-icon-crop" @click="openDesign(row)">
        设计
      </el-button>
    </template>
  </avue-crud>
  <el-dialog v-model="dialogVisible" :title="`模型设计-${formData.flowName}`" fullscreen destroy-on-close>
    <FlowDesignWrapper v-model="formData.flowData" style="height: calc(100vh - 177px)" />
    <template #footer>
      <el-button type="primary" @click="handleSaveLayout">
        保存
      </el-button>
      <el-button @click="dialogVisible = false">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>
