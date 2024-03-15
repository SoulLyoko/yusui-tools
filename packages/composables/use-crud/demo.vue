<script setup lang="ts">
import { useCrud } from '@yusui/composables'

function getList() {
  return Promise.resolve({
    data: {
      rows: [{ id: '1', value: 'value' }],
      count: 1,
    },
  })
}
function getInfo() {
  return Promise.resolve({
    data: { id: '1', value: 'valueFormGetInfo' },
  })
}
function create() {
  return Promise.resolve()
}
function update() {
  return Promise.resolve()
}
function remove() {
  return Promise.resolve()
}

const { bindVal, crudRef, getDataList } = useCrud({
  crudOption: {
    getList,
    getInfo,
    create,
    update,
    remove,
    dataPath: 'res.data.rows',
    totalPath: 'res.data.count',
  },
  tableOption: {
    rowKey: 'id',
    addBtn: false,
    column: [{ label: '值', prop: 'value' }],
  },
})
getDataList()
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" text icon="el-icon-plus" @click="crudRef?.rowAdd()">
        新增
      </el-button>
    </template>
  </avue-crud>
</template>
