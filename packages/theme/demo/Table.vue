<script setup lang="ts">
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]

const tableData1 = [
  { id: '12987122', name: 'Tom', amount1: '234', amount2: '3.2', amount3: 10 },
  { id: '12987123', name: 'Tom', amount1: '165', amount2: '4.43', amount3: 12 },
  { id: '12987124', name: 'Tom', amount1: '324', amount2: '1.9', amount3: 9 },
  { id: '12987125', name: 'Tom', amount1: '621', amount2: '2.2', amount3: 17 },
  { id: '12987126', name: 'Tom', amount1: '539', amount2: '4.1', amount3: 15 },
]
</script>

<template>
  <h3>基础表格</h3>
  <el-table :data="tableData">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" width="220" />
  </el-table>

  <h3>表格功能</h3>
  <el-table :data="tableData" stripe border>
    <el-table-column type="selection" fixed="left" width="50" />
    <el-table-column prop="date" label="Date" sortable width="150" />
    <el-table-column prop="name" label="Name" :filters="[{ text: 'Tom', value: 'Tom' }]" width="150" />
    <el-table-column prop="address" label="Address" width="220" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <h3>合计</h3>
  <el-table :data="tableData1" border show-summary height="200">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" sortable label="Amount 1" />
    <el-table-column prop="amount2" sortable label="Amount 2" />
    <el-table-column prop="amount3" sortable label="Amount 3" />
  </el-table>
</template>

<style lang="scss">
.el-table {
  th,
  td,
  tr {
    border: none;
    color: inherit;
  }
  tr:nth-child(2n) {
    background-color: var(--el-table-tr-bg-color);
  }
  table {
    overflow-x: unset;
  }
}
</style>
