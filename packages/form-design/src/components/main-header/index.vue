<template>
  <el-button type="primary" size="default" @click="handlePreview">预览</el-button>
  <Preview v-model:visible="previewVisible"></Preview>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Preview from "./preview.vue";

const previewVisible = ref(false);

function handlePreview() {
  previewVisible.value = true;
}
</script>

<style lang="scss" scoped></style>
