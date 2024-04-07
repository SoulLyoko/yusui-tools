<script setup lang="ts">
const value = Date.now() + 1000 * 60 * 60 * 7
</script>

<template>
  <h3>基础用法</h3>
  <el-statistic title="Daily active users" :value="268500" />

  <h3>倒计时</h3>
  <el-countdown title="Start to grab" :value="value" />
</template>
