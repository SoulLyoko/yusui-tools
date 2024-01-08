<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
</script>

<template>
  <h3>基础用法</h3>
  <el-steps :active="active" align-center>
    <el-step title="Finished" description="This is a description." />
    <el-step title="In Progress" description="This is a description." />
    <el-step title="Waiting" description="This is a description." />
    <el-step title="Error" description="This is a description." status="error" />
    <el-step title="Success" description="This is a description." status="success" />
  </el-steps>

  <h3>垂直的步骤条</h3>
  <el-steps :active="active" direction="vertical" style="height: 200px">
    <el-step title="Finished" description="This is a description." />
    <el-step title="In Progress" description="This is a description." />
    <el-step title="Waiting" description="This is a description." />
  </el-steps>

  <h3>简洁风格的步骤条</h3>
  <el-steps :active="1" simple>
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
    <el-step title="Step 5" status="error" />
    <el-step title="Step 4" status="success" />
  </el-steps>
</template>
