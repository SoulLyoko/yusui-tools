<script setup lang="ts">
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowParamApi } from '../../api'

const { bindVal, getDataList } = useCrud({
  tableOption,
  crudOption: useFlowParamApi(),
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal" />
</template>
