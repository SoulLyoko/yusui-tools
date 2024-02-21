<script setup lang="ts">
import { ref } from 'vue'
import * as ep from '@iconify-json/ep'
import { addCollection } from '@iconify/vue'

// 添加本地图标集
addCollection(ep.icons)
const localCollections = [ep]

const icon = ref('')
</script>

<template>
  从iconify获取: <IconSelect v-model="icon" />
  <br>
  从icones获取: <IconSelect v-model="icon" source="icones" />
  <br>
  指定图标集: <IconSelect v-model="icon" collections="icon-park,icon-park-,ant-design" />
  <br>
  本地图标集: <IconSelect v-model="icon" :collections="localCollections" :width="800" />
</template>
