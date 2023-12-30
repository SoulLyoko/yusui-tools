<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const mvalue = ref(['选项一'])
const options = [
  { label: '选项一', value: '选项一' },
  { label: '选项二', value: '选项二' },
  { label: '选项三', value: '选项三' },
  { label: '选项四', value: '选项四', disabled: true },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-select v-model="value" placeholder="Select" clearable>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>

  <h3>多选</h3>
  <el-select v-model="mvalue" placeholder="Select" multiple clearable>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>

  <h3>禁用状态</h3>
  <el-select v-model="value" placeholder="Select" disabled />
  <el-select v-model="mvalue" placeholder="Select" multiple disabled />
</template>
