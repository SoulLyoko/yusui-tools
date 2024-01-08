<script setup lang="ts">
</script>

<template>
  <h3>基础用法</h3>
  <el-alert title="Success alert" type="success" description="description" show-icon />
  <el-alert title="Info alert" type="info" description="description" show-icon center />
  <el-alert title="Warning alert" type="warning" show-icon />
  <el-alert title="Error alert" type="error" show-icon center />

  <h3>主题</h3>
  <el-alert title="Success alert" type="success" effect="dark" show-icon />
  <el-alert title="Info alert" type="info" effect="dark" show-icon />
  <el-alert title="Warning alert" type="warning" effect="dark" show-icon />
  <el-alert title="Error alert" type="error" effect="dark" show-icon />
</template>

<style lang="scss" scoped>
.el-alert + .el-alert {
  margin-top: 10px;
}
</style>
