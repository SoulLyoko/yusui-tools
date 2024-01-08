<script setup lang="ts">
const layout = 'total, sizes, prev, pager, next, jumper'
</script>

<template>
  <h3>基础用法</h3>
  <el-pagination :layout="layout" :total="100" />
  <br>
  <el-pagination :layout="layout" :total="100" disabled />
  <br>
  <el-pagination :layout="layout" :total="100" background />
  <br>
  <el-pagination :layout="layout" :total="100" background disabled />
</template>

<style lang="scss">
.el-pagination {
  li + li {
    margin-top: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
