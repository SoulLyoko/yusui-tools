<script setup lang="ts">
import { h } from 'vue'
import { ElButton } from 'element-plus'

import { useOverlay } from '.'

const { open: openDialog, close: closeDialog } = useOverlay({
  title: '对话框',
  default: () => h(ElButton, { onClick: () => closeDialog() }, '关闭'),
  // 使用jsx
  // default: ()=> <ElButton onClick={() => close()}>关闭</ElButton>,
})

const { open: openDrawer, close: closeDrawer } = useOverlay({
  title: '抽屉',
  type: 'drawer',
  default: () => h(ElButton, { onClick: () => closeDrawer() }, '关闭'),
})

const { open: openOverlay, close: closeOverlay } = useOverlay({
  type: 'overlay',
  style: 'display:flex;justify-content:center;align-items:center;',
  default: () => h(ElButton, { onClick: () => closeOverlay(0) }, '关闭'),
})
</script>

<template>
  <ElButton type="primary" size="default" @click="openDialog()">
    打开对话框
  </ElButton>

  <ElButton type="primary" size="default" @click="openDrawer()">
    打开抽屉
  </ElButton>

  <ElButton type="primary" size="default" @click="openOverlay()">
    打开覆盖层
  </ElButton>
</template>
