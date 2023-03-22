<template>
  <IconSelect v-model="icon"></IconSelect>
  <br />
  preview：<IconSelect v-model="icon" preview width="32px"></IconSelect>
</template>

<script setup lang="ts">
import { ref } from "vue";

const icon = ref("");
</script>
