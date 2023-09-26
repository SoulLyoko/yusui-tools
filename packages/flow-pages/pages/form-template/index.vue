<script setup lang="ts">
import type { FormTemplate } from '@yusui/flow-pages'

import { ref } from 'vue'
import { useCrud } from '@yusui/composables'
import { useConfigProvider, useFormTemplateApi } from '@yusui/flow-pages'

import { tableOption } from './option'
import FormDesignWrapper from '../../components/FormDesignWrapper.vue'

const { request } = useConfigProvider()

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  handleUpdate,
} = useCrud({
  tableOption,
  crudOption: useFormTemplateApi(request),
})
getDataList()

const dialogVisible = ref(false)
async function openDesign(row: FormTemplate) {
  formData.value = { ...row }
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
  <el-dialog v-model="dialogVisible" :title="`表单设计-${formData.formName}`" fullscreen destroy-on-close>
    <FormDesignWrapper v-model="formData.formOption" style="height: calc(100vh - 177px)" />
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
