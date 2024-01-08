<script setup lang="ts">
import { ref } from 'vue'

const value = ref('A')
const options = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D', disabled: true },
]

const size = ref('default' as const)
const sizes = ['large', 'default', 'small']
</script>

<template>
  <h3>基础用法</h3>
  尺寸：
  <el-radio-group v-model="size">
    <el-radio v-for="item in sizes" :key="item" :label="item" />
  </el-radio-group>
  <br>

  <el-radio-group v-model="value" :size="size">
    <el-radio v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-radio-group>
  <br>
  <el-radio-group v-model="value" :size="size">
    <el-radio-button v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-radio-group>
  <br>
  <br>
  <el-radio-group v-model="value" :size="size">
    <el-radio v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" border />
  </el-radio-group>

  <h3>禁用状态</h3>
  <el-radio-group v-model="value" disabled>
    <el-radio v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-radio-group>
  <br>
  <br>
  <el-radio-group v-model="value" disabled>
    <el-radio-button v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" />
  </el-radio-group>
  <br>
  <br>
  <el-radio-group v-model="value" disabled>
    <el-radio v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" border />
  </el-radio-group>
</template>
