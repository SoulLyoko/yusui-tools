<script setup lang="ts">
import { ref } from 'vue'

const input = ref('<div>HTML content</div>')
</script>

<template>
  <div>input: <textarea v-model="input" placeholder="Input HTMLText Here" /></div>
  <div>html: <ProHtml v-model="input" /></div>
</template>
