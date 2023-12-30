<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['A', 'D'])
const options = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D', disabled: true },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-checkbox :indeterminate="true">
    半选
  </el-checkbox>
  <el-checkbox-group v-model="value">
    <el-checkbox v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="value">
    <el-checkbox-button v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="value">
    <el-checkbox v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" border />
  </el-checkbox-group>

  <h3>禁用状态</h3>
  <el-checkbox-group v-model="value" disabled>
    <el-checkbox v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="value" disabled>
    <el-checkbox-button v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="value" disabled>
    <el-checkbox v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" border />
  </el-checkbox-group>
</template>
