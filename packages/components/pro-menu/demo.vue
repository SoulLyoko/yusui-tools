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
        name: 'components-pro-menu',
        path: '/components/pro-menu/index',
        redirect: '',
        meta: { title: 'ProMenu', icon: 'ep:menu' },
      },
      {
        name: 'components-pro-tree',
        path: '/components/pro-tree/index',
        redirect: '',
        meta: { title: 'ProTree', icon: 'ep:menu' },
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
  {
    name: 'plugins',
    path: '/plugins',
    redirect: '',
    meta: { title: 'Plugins', icon: 'ep:menu', disabled: true },
  },
  {
    name: 'types',
    path: '/types',
    redirect: '',
    meta: { title: 'Types', icon: 'ep:menu', disabled: true },
  },
  {
    name: 'utils',
    path: '/utils',
    redirect: '',
    meta: { title: 'Utils', icon: 'ep:menu', disabled: true },
  },
])

const router = useRouter()
function onMenuClick(route: RouteRecordRaw) {
  console.log('click', route)
  if (!route.children?.length)
    router.go(route.path)
}
const activeMenuIndex = ref('/components/pro-menu/index')

const collapse = ref(false)
</script>

<template>
  <h3>默认纵向：</h3>
  <div style="width:300px">
    <el-switch v-model="collapse" active-text="折叠" inactive-text="展开" />
    <ProMenu v-model="activeMenuIndex" :routes="menuList" :collapse="collapse" @click="onMenuClick" />
  </div>
  <h3>横向：</h3>
  <ProMenu
    v-model="activeMenuIndex" :routes="menuList" mode="horizontal" @click="onMenuClick"
  />
  <h3>插槽：</h3>
  <ProMenu v-model="activeMenuIndex" :routes="menuList" :collapse="collapse">
    <template #default="{ route }">
      <span @click="onMenuClick(route)">
        自定义插槽 - {{ route.meta?.title }}
      </span>
    </template>
  </ProMenu>
  <ProMenu v-model="activeMenuIndex" :routes="menuList" mode="horizontal">
    <template #default="{ route }">
      <div style="width:100%" @click="onMenuClick(route)">
        自定义插槽 - {{ route.meta?.title }}
      </div>
    </template>
  </ProMenu>
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
