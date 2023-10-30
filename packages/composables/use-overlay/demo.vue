<script setup lang="ts">
import { h } from 'vue'
import { ElButton } from 'element-plus'

import { useOverlay } from '.'

const { open, close } = useOverlay({
  title: '命令式弹窗',
  content: h(ElButton, { onClick: () => close() }, '关闭'),
  // 使用jsx
  // content: <ElButton onClick={() => close()}>关闭</ElButton>,
})

const { open: open1, close: close1, visible } = useOverlay()
</script>

<template>
  <ElButton type="primary" size="default" @click="open()">
    打开命令式弹窗
  </ElButton>

  <ElButton type="primary" size="default" @click="open1()">
    打开组件式弹窗
  </ElButton>

  <el-dialog v-model="visible" title="组件式弹窗">
    <ElButton @click="close1()">
      关闭
    </ElButton>
  </el-dialog>
</template>
