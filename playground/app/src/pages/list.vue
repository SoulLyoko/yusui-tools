<script setup lang="ts">
import { useCrud } from '@yusui/uvue'

import { listOption, mockData } from './option'

const { bindList, getDataList } = useCrud({
  listOption,
  crudOption: {
    searchKey: 'userName',
  },
  mockData,
})
getDataList()
</script>

<template>
  <uvue-list v-bind="bindList">
    <template #value>
      <view>slot</view>
    </template>
  </uvue-list>
</template>

<route type="home" lang="yaml">
style:
  navigationBarTitleText: list
</route>
