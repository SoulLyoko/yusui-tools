<script setup lang="ts">
const list = [
  { label: 'Default', type: 'default' as const },
  { label: 'Primary', type: 'primary' as const },
  { label: 'Success', type: 'success' as const },
  { label: 'Info', type: 'info' as const },
  { label: 'Warning', type: 'warning' as const },
  { label: 'Danger', type: 'danger' as const },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-link v-for="item in list" :key="item.label" href="#" :type="item.type" style="margin-right:12px">
    {{ item.label }}
  </el-link>

  <h3>禁用状态</h3>
  <el-link v-for="item in list" :key="item.label" href="#" :type="item.type" disabled style="margin-right:12px">
    {{ item.label }}
  </el-link>
</template>
