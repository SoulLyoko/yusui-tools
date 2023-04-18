<script setup lang="ts">
import { useCrud } from '@yusui/composables'

function getList() {
  return Promise.resolve({
    data: {
      rows: [{ name: 'demo' }],
      count: 1,
    },
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
    create,
    update,
    remove,
    dataPath: 'res.data.rows',
    totalPath: 'res.data.count',
  },
  tableOption: {
    addBtn: false,
    column: [{ label: '名称', prop: 'name' }],
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
