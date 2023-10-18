<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

import { ref } from 'vue'

const menuList = ref<RouteRecordRaw[]>([
  {
    name: 'components',
    path: '/yusui-tools/components/',
    redirect: '',
    meta: { title: 'Components', icon: 'ep:plus' },
    children: [
      {
        name: 'components-start',
        path: '/yusui-tools/components/index',
        redirect: '',
        meta: { title: 'Start', icon: 'ep:plus' },
      },
      {
        name: 'components-icon-select',
        path: '/yusui-tools/components/icon-select/',
        redirect: '',
        meta: { title: 'IconSelect', icon: 'ep:plus' },
      },
      {
        name: 'components-input-tree',
        path: '/yusui-tools/components/input-tree/',
        redirect: '',
        meta: { title: 'InputTree', icon: 'ep:plus' },
      },
    ],
  },
  {
    name: 'composables',
    path: '/yusui-tools/composables/',
    redirect: '',
    meta: { title: 'Composables', icon: 'ep:minus' },
    children: [
      {
        name: 'composables-start',
        path: '/yusui-tools/composables/index',
        redirect: '',
        meta: { title: 'Start', icon: 'ep:minus' },
      },
      {
        name: 'composables-use-crud',
        path: '/yusui-tools/composables/use-crud/',
        redirect: '',
        meta: { title: 'useCrud', icon: 'ep:minus' },
      },
      {
        name: 'composables-use-dict',
        path: '/yusui-tools/composables/use-dict/',
        redirect: '',
        meta: { title: 'useDict', icon: 'ep:minus' },
      },
    ],
  },
])

function onMenuClick(menu: RouteRecordRaw) {
  console.log('click', menu)
}
function onContextmenu(menu: RouteRecordRaw) {
  console.log('contextmenu', menu)
}

const activeMenuIndex = ref('/yusui-tools/components/index')
</script>

<template>
  默认纵向：
  <div style="width:300px">
    <EpMenu v-model="activeMenuIndex" :routes="menuList" @click="onMenuClick" @contextmenu="onContextmenu" />
  </div>
  横向：
  <EpMenu
    v-model="activeMenuIndex" :routes="menuList" mode="horizontal" @click="onMenuClick"
    @contextmenu="onContextmenu"
  />
</template>
