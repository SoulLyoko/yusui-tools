<script setup lang="ts">
import { onMounted, ref } from 'vue'

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const percentage = ref(0)
onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 10
  }, 500)
})
</script>

<template>
  <h3>直线进度条</h3>
  <div style="width:50%">
    <el-progress :percentage="50" indeterminate />
    <el-progress :percentage="100" status="success" />
    <el-progress :percentage="100" status="warning" />
    <el-progress :percentage="50" status="exception" striped striped-flow />
  </div>

  <h3>进度条内显示百分比</h3>
  <el-progress :text-inside="true" :stroke-width="20" :percentage="70" />

  <h3>环形进度条</h3>
  <el-space>
    <el-progress type="circle" :percentage="25" />
    <el-progress type="circle" :percentage="100" status="success" />
    <el-progress type="circle" :percentage="70" status="warning" />
    <el-progress type="circle" :percentage="50" status="exception" />
  </el-space>

  <h3>仪表盘形进度条</h3>
  <el-space>
    <el-progress type="dashboard" :percentage="25" />
    <el-progress type="dashboard" :percentage="percentage" :color="colors" />
  </el-space>
</template>
