<script setup lang="ts">
import { ref } from 'vue'

const icon = ref('')
</script>

<template>
  指定图标集: <IconSelect v-model="icon" collections="ant-design,ep,icon-park" />
  <br>
  从iconify获取: <IconSelect v-model="icon" />
  <br>
  从icones获取: <IconSelect v-model="icon" source="icones" />
</template>
