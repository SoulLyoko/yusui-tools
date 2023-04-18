<script setup lang="ts">
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { create, getList, remove, update } from '../api/flow-param'

const { bindVal, getDataList } = useCrud({
  crudOption: {
    rowKey: 'id',
    getList,
    create,
    update,
    remove,
  },
  tableOption,
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal" />
</template>
