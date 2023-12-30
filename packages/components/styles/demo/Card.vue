<script setup lang="ts">
</script>

<template>
  <h3>基础用法</h3>
  <el-card shadow="never">
    <template #header>
      <el-row justify="space-between">
        <el-col :span="22">
          <strong>Header</strong>
        </el-col>
        <el-col :span="2">
          <el-button text type="primary">
            More
          </el-button>
        </el-col>
      </el-row>
    </template>
    <div v-for="i in 4" :key="i">
      {{ `List item ${i}` }}
    </div>
    <template #footer>
      Footer
    </template>
  </el-card>

  <h3>带有阴影的卡片</h3>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card>
        Always
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        Hover
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="never">
        Never
      </el-card>
    </el-col>
  </el-row>
</template>
