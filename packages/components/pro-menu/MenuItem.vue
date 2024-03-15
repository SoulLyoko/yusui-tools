<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { MenuItemSlots } from './props'

import { computed } from 'vue'
import { createReusableTemplate, useParentElement } from '@vueuse/core'
import { subMenuProps } from 'element-plus'
import { pick } from 'lodash-unified'

import { menuItemEmits, menuItemProps } from './props'

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)
defineSlots<MenuItemSlots>()

const bindSubMenuProps = computed(() => {
  return pick(props, Object.keys(subMenuProps))
})
const bindMenuItemProps = computed(() => {
  return pick(props, Object.keys(menuItemProps))
})

const [DefineMenuTitle, MenuTitle] = createReusableTemplate<{ route: RouteRecordRaw }>()

function bindMenuItemEvents(route: RouteRecordRaw) {
  function emitEvent(type: string, e: MouseEvent | RouteRecordRaw) {
    const isEvent = e instanceof Event
    if (isEvent)
      e.preventDefault()
    const item = isEvent ? route : e
    emit(type as any, item)
  }
  return {
    onClick(e: MouseEvent | RouteRecordRaw) {
      emitEvent('click', e)
    },
    onContextmenu(e: MouseEvent | RouteRecordRaw) {
      emitEvent('contextmenu', e)
    },
  }
}

const parentEl = useParentElement()
const showTitle = computed(() => {
  const isPopup = parentEl.value?.classList.contains('el-menu--popup')
  return !props.collapse || isPopup
})
</script>

<template>
  <DefineMenuTitle v-slot="{ route }">
    <slot v-if="$slots.default" :route="route" />
    <div v-else class="pro-menu-item" style="width: 100%;" v-bind="bindMenuItemEvents(route)">
      <el-icon v-if="route.meta?.icon" class="pro-menu-icon">
        <Icon :icon="route.meta?.icon" />
      </el-icon>
      <span v-show="showTitle" class="pro-menu-title">{{ route.meta?.title }}</span>
    </div>
  </DefineMenuTitle>

  <el-sub-menu v-if="route.children?.length" v-bind="bindSubMenuProps" :index="route[indexKey as 'path']" :disabled="route.meta?.disabled">
    <template #title>
      <MenuTitle :route="route" />
    </template>
    <MenuItem
      v-for="childRoute in route.children" :key="childRoute[indexKey]"
      v-bind="{ ...bindMenuItemProps, ...bindMenuItemEvents(route) }" :route="childRoute"
    >
      <template v-if="$slots.default" #default="scope">
        <slot v-bind="scope" />
      </template>
    </MenuItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route[indexKey as 'path']" :route="route" :disabled="route.meta?.disabled">
    <MenuTitle :route="route" />
  </el-menu-item>
</template>
