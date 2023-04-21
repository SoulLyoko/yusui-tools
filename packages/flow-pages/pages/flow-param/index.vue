<script setup lang="ts">
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { create, getList, remove, update } from '../../api/flow-param'

const { bindVal, getDataList } = useCrud({
  tableOption,
  crudOption: {
    getList,
    create,
    update,
    remove,
  },
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal" />
</template>
