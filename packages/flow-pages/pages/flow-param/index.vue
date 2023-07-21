<script setup lang="ts">
import { useCrud } from '@yusui/composables'
import { useConfigProvider, useFlowParamApi } from '@yusui/flow-pages'

import { tableOption } from './option'

const { request } = useConfigProvider()

const { bindVal, getDataList } = useCrud({
  tableOption,
  crudOption: useFlowParamApi(request),
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal" />
</template>
