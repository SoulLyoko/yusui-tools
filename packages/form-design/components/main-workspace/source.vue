<template>
  <MonacoEditor v-model="modelValue" valueType="object" />
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";
import MonacoEditor from "../../setters/monaco-editor/index.vue";

const { modelValue } = useInjectState();
</script>
