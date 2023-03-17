<template>
  <el-text>{{ modelValue }}</el-text>
</template>

<script setup lang="ts">
/**
 * 继承自el-text
 */
defineProps({
  modelValue: String
});
</script>
