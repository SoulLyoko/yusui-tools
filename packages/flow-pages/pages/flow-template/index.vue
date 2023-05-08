<script setup lang="ts">
import type { FlowTemplate } from '../../api'

import { ref } from 'vue'
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowTemplateApi } from '../../api'
import FlowDesignWrapper from '../../components/flow-design-wrapper/index.vue'

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  handleUpdate,
} = useCrud({
  tableOption,
  crudOption: useFlowTemplateApi(),
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
    NaN,
    () => (dialogVisible.value = false),
    () => {},
  )
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #flowData="{ row }">
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
