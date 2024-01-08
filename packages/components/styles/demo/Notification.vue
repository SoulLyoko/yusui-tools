<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { capitalize } from 'lodash-es'

function open(type: string) {
  ElNotification ({
    title: capitalize(type),
    message: 'This is a notification',
    type: type as any,
    duration: 0,
  })
}

const types = ['success', 'warning', 'info', 'error']
</script>

<template>
  <el-button v-for="type in types" :key="type" @click="open(type)">
    {{ type }}
  </el-button>
</template>
