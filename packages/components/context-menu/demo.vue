<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const data = [
  { label: 'test1', icon: 'ep:plus' },
  { label: 'test2', icon: 'ep:plus' },
  {
    label: 'test3',
    icon: 'ep:plus',
    children: [
      { label: 'test3-1', icon: 'ep:plus' },
      {
        label: 'test3-2',
        icon: 'ep:plus',
        children: [
          { label: 'test3-2-1', icon: 'ep:plus' },
        ],
      },
    ],
  },
]

const triggerRef = ref()

function onSelect(item: any) {
  ElMessage.success(`点击了${item.label}`)
}
</script>

<template>
  <el-button ref="triggerRef">
    点击右键触发
  </el-button>

  <ContextMenu :data="data" :trigger-ref="triggerRef" @select="onSelect" />
</template>
