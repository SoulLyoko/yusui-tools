<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <el-button type="primary" @click="visible = true">
    open
  </el-button>
  <el-drawer v-model="visible" title="I am the title">
    <span>Hi, there!</span>

    <template #footer>
      footer
    </template>
  </el-drawer>
</template>
