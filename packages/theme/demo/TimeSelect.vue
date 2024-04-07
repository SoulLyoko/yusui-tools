<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <h3>固定时间点</h3>
  <el-time-select v-model="value" start="08:30" step="00:15" end="18:30" placeholder="Select time" />
</template>
