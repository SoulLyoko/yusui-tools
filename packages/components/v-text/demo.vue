<script setup lang="ts">
import { ref } from 'vue'

const text = ref('primary' as const)
</script>

<template>
  <div>input: <input v-model="text" placeholder="Input Text Here"></div>
  <div>text: <VText v-model="text" :type="text" /></div>
</template>
