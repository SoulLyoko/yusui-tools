<template>
  <EditorSetter v-model="modelValue" valueType="object" />
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";
import { EditorSetter } from "../../setters";

const { modelValue } = useInjectState();
</script>
