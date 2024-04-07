<script setup lang="ts">
const items = [
  { label: 'Username', value: 'kooriookami' },
  { label: 'Telephone', value: '18100000000' },
  { label: 'Place', value: 'Suzhou' },
  { label: 'Remarks', value: 'School' },
  { label: 'Address', value: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province' },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-descriptions title="User Info">
    <el-descriptions-item v-for="item in items" :key="item.label" :label="item.label">
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions title="带边框" border>
    <el-descriptions-item v-for="item in items" :key="item.label" :label="item.label">
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>

  <h3>垂直列表</h3>
  <el-descriptions title="带边框" direction="vertical" border>
    <el-descriptions-item v-for="item in items" :key="item.label" :label="item.label">
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions title="无边框" direction="vertical">
    <el-descriptions-item v-for="item in items" :key="item.label" :label="item.label">
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style lang="scss">
.el-descriptions {
  table {
    display: table;
    margin: unset;
  }
  th {
    padding: 0;
    border: inherit;
    background-color: unset;
    text-align: center;
  }
  td {
    padding: 0;
    border: inherit;
  }
  tr {
    border-top: none;
  }
  tr:nth-child(2n) {
    background-color: unset;
  }
}
</style>
