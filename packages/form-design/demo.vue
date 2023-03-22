<template>
  <div style="height: 800px">
    <FormDesign v-model="option"></FormDesign>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const option = ref({});
</script>
