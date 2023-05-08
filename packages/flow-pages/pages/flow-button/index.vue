<script setup lang="ts">
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowButtonApi } from '../../api'

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
} = useCrud({
  tableOption,
  crudOption: useFlowButtonApi(),
  sortOption: {
    ascs: 'sort',
  },
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #icon="{ row }">
      <v-icon :icon="row.icon" style="display: inline" />
    </template>
    <template #buttonPreview="{ row }">
      <el-button :type="row.buttonType">
        <v-icon :icon="row.icon" />
        {{ row.name }}
      </el-button>
    </template>
    <template #buttonPreview-form>
      <el-button :type="formData.buttonType">
        <v-icon :icon="formData.icon" />
        {{ formData.name }}
      </el-button>
    </template>
  </avue-crud>
</template>
