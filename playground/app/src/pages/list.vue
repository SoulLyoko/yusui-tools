<script setup lang="ts">
import { useCrud } from '@yusui/uvue'

import { listOption, mockData } from './option'

const { bindList, getDataList, handleEdit } = useCrud({
  listOption,
  crudOption: {
    searchKey: 'userName',
    formPath: '/pages/form',
  },
  mockData,
})
getDataList()
</script>

<template>
  <uvue-list v-bind="bindList" @item-click="handleEdit">
    <template #value>
      <view>slot</view>
    </template>
  </uvue-list>
</template>

<route type="home" lang="yaml">
style:
  navigationBarTitleText: list
</route>
