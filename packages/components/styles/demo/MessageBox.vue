<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { capitalize } from 'lodash-es'

function open(type: string) {
  ElMessageBox
    .confirm(
      'This is a confirm message box.',
      capitalize(type),
      { confirmButtonText: 'OK', cancelButtonText: 'Cancel', type: type as any },
    )
}

const types = ['success', 'warning', 'info', 'error']
</script>

<template>
  <el-button v-for="type in types" :key="type" @click="open(type)">
    {{ type }}
  </el-button>
</template>
