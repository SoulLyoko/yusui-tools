<script setup lang="ts">
import { ref } from 'vue'

const option = ref({})
</script>

<template>
  <div style="height: 800px">
    <FormDesign v-model="option" />
  </div>
</template>
