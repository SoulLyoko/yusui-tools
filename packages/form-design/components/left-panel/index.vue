<script setup lang="ts">
import Resource from './resource.vue'
import Tree from './tree.vue'
import History from './history.vue'

const tabs = [
  { title: '组件', icon: 'el-icon-menu', component: Resource },
  { title: '大纲', icon: 'el-icon-operation', component: Tree },
  { title: '历史', icon: 'el-icon-clock', component: History },
]
</script>

<template>
  <el-tabs tab-position="top" stretch>
    <el-tab-pane v-for="tab in tabs" :key="tab.title">
      <template #label>
        <el-link :title="tab.title" :icon="tab.icon" :underline="false" style="color: inherit" />
      </template>
      <component :is="tab.component" />
    </el-tab-pane>
  </el-tabs>
</template>
