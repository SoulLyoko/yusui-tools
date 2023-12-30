<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <h3>基础用法</h3>
  <el-input v-model="value" placeholder="Please input" clearable />

  <h3>禁用状态</h3>
  <el-input v-model="value" placeholder="Please input" disabled />

  <h3>密码框</h3>
  <el-input v-model="value" placeholder="Please input" type="password" show-password />

  <h3>带图标的输入框</h3>
  <el-input v-model="value" placeholder="Please input" prefix-icon="el-icon-user" suffix-icon="el-icon-search" />

  <h3>复合型输入框</h3>
  <el-input v-model="value" placeholder="Please input">
    <template #prepend>
      http://
    </template>
    <template #append>
      .com
    </template>
  </el-input>

  <h3>文本域</h3>
  <el-input v-model="value" placeholder="Please input" type="textarea" />
</template>
