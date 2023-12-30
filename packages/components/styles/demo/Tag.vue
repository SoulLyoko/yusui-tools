<script setup lang="ts">
const list = [
  { label: 'Primary', type: '' as const },
  { label: 'Success', type: 'success' as const },
  { label: 'Info', type: 'info' as const },
  { label: 'Warning', type: 'warning' as const },
  { label: 'Danger', type: 'danger' as const },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable effect="dark" style="margin-right:10px">
    {{ item.label }}
  </el-tag>
  <br>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable style="margin-right:10px">
    {{ item.label }}
  </el-tag>
  <br>
  <el-tag v-for="item in list" :key="item.label" :type="item.type" closable effect="plain" style="margin-right:10px">
    {{ item.label }}
  </el-tag>
</template>
