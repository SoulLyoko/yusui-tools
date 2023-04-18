<script setup lang="ts">
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { create, getList, remove, update } from '../api/flow-button'

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
} = useCrud({
  crudOption: {
    rowKey: 'id',
    getList,
    create,
    update,
    remove,
  },
  tableOption,
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
