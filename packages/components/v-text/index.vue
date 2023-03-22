<template>
  <el-text>{{ modelValue }}</el-text>
</template>

<script setup lang="ts">
/**
 * extends el-text
 */
defineProps({
  modelValue: { type: String }
});
</script>
