<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

import { ref } from 'vue'
import { useRouter } from 'vitepress'

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
        meta: { title: 'Start', icon: 'ep:menu' },
      },
      {
        name: 'components-ep-menu',
        path: '/components/ep-menu/index',
        redirect: '',
        meta: { title: 'EpMenu', icon: 'ep:menu' },
      },
      {
        name: 'components-ep-tree',
        path: '/components/ep-tree/index',
        redirect: '',
        meta: { title: 'EpTree', icon: 'ep:menu' },
      },
      {
        name: 'components-icon-select',
        path: '/components/icon-select/index',
        redirect: '',
        meta: { title: 'IconSelect', icon: 'ep:menu' },
      },
    ],
  },
  {
    name: 'composables',
    path: '/composables',
    redirect: '',
    meta: { title: 'Composables', icon: 'ep:menu' },
    children: [
      {
        name: 'composables-start',
        path: '/composables/index',
        redirect: '',
        meta: { title: 'Start', icon: 'ep:menu' },
      },
      {
        name: 'composables-use-crud',
        path: '/composables/use-crud/',
        redirect: '',
        meta: { title: 'useCrud', icon: 'ep:menu' },
      },
      {
        name: 'composables-use-dict',
        path: '/composables/use-dict/',
        redirect: '',
        meta: { title: 'useDict', icon: 'ep:menu' },
      },
    ],
  },
])

const router = useRouter()
function onMenuItemClick(route: RouteRecordRaw) {
  console.log('item-click', route)
  if (!route.children?.length)
    router.go(route.path)
}
function onMenuItemContextmenu(route: RouteRecordRaw) {
  console.log('item-contextmenu', route)
}

const activeMenuIndex = ref('/components/ep-menu/index')
</script>

<template>
  默认纵向：
  <div style="width:300px">
    <EpMenu v-model="activeMenuIndex" :routes="menuList" @item-click="onMenuItemClick" @item-contextmenu="onMenuItemContextmenu" />
  </div>
  横向：
  <EpMenu
    v-model="activeMenuIndex" :routes="menuList" mode="horizontal" @item-click="onMenuItemClick"
    @item-contextmenu="onMenuItemContextmenu"
  />
  插槽：
  <EpMenu v-model="activeMenuIndex" :routes="menuList" mode="horizontal">
    <template #default="route">
      {{ route.meta?.title }}自定义插槽
    </template>
  </EpMenu>
</template>
