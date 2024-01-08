<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

import { ref } from 'vue'

const collapse = ref(false)
const activeMenuIndex = ref('/components/ep-menu/index')
const menuList = ref<RouteRecordRaw[]>([
  {
    name: 'components',
    path: '/components',
    redirect: '',
    meta: { title: 'Components', icon: 'ep:menu' },
    children: [
      {
        name: 'components-start',
        path: '/components/index',
        redirect: '',
        meta: { title: 'Start' },
      },
      {
        name: 'components-theme',
        path: '/components/theme/index',
        redirect: '',
        meta: { title: 'Theme' },
        children: [
          {
            name: 'components-theme-button',
            path: '/components/theme/button/index',
            redirect: '',
            meta: { title: 'Button' },
          },
          {
            name: 'components-theme-link',
            path: '/components/theme/link/index',
            redirect: '',
            meta: { title: 'Link' },
          },
        ],
      },
    ],
  },
  {
    name: 'composables',
    path: '/composables',
    redirect: '',
    meta: { title: 'Composables', icon: 'ep:menu' },
  },
  {
    name: 'types',
    path: '/types',
    redirect: '',
    meta: { title: 'types', icon: 'ep:menu', disabled: true },
    children: [
      {
        name: 'types-avue',
        path: '/types/avue/index',
        redirect: '',
        meta: { title: 'Avue' },
      },
    ],
  },
  {
    name: 'utils',
    path: '/utils',
    redirect: '',
    meta: { title: 'utils', icon: 'ep:menu' },
  },
])
</script>

<template>
  <h3>顶栏</h3>
  <EpMenu v-model="activeMenuIndex" :routes="menuList" mode="horizontal" />

  <h3>侧栏</h3>
  <div style="width:300px">
    <el-switch v-model="collapse" active-text="折叠" inactive-text="展开" />
    <EpMenu v-model="activeMenuIndex" :routes="menuList" :collapse="collapse" />
  </div>
</template>

<style lang="scss">
ul.el-menu {
  padding: 0;
  margin: 0;

  li + li {
    margin-top: 0;
  }

  li > ul {
    margin: 0;
  }
}
</style>
