<template>
  <ElText>{{ modelValue }}</ElText>
</template>

<script setup lang="ts">
import { ElText } from "element-plus";

/**
 * extends ElText
 */
defineProps({
  modelValue: { type: String }
});
</script>
