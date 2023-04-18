<script setup lang="ts">
import { ref } from 'vue'

const icon = ref('')
</script>

<template>
  <IconSelect v-model="icon" />
  <br>
  preview：<IconSelect v-model="icon" preview width="32px" />
</template>
