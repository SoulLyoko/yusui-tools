<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <el-button text @click="visible = true">
    click to open the Dialog
  </el-button>

  <el-dialog v-model="visible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <el-button @click="visible = false">
        Cancel
      </el-button>
      <el-button type="primary" @click="visible = false">
        Confirm
      </el-button>
    </template>
  </el-dialog>
</template>
