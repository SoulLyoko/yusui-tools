<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { EpMenuEmits, EpMenuProps, OnSelectParams } from './types'

import { computed } from 'vue'
import { createReusableTemplate, useVModels } from '@vueuse/core'
import { menuProps, subMenuProps } from 'element-plus'
import { pick } from 'lodash-unified'

const props = withDefaults(
  defineProps<EpMenuProps>(),
  { indexKey: 'path' },
)
const emit = defineEmits<EpMenuEmits>()
const { modelValue: activeMenuIndex } = useVModels(props)

const elMenuProps = computed(() => {
  return pick(props, Object.keys(menuProps))
})
const elSubMenuProps = computed(() => {
  return pick(props, Object.keys(subMenuProps))
})

function onMenuSelect(...args: OnSelectParams) {
  activeMenuIndex!.value = args[0]
  emit('select', ...args)
}

const [DefineMenuTitle, MenuTitle] = createReusableTemplate<{ menu: RouteRecordRaw }>()
const [DefineMenuItem, MenuItem] = createReusableTemplate<{ routes?: RouteRecordRaw[] }>()

function bindMenuItemEvents(menu: RouteRecordRaw) {
  function emitEvent(type: keyof EpMenuEmits, e: MouseEvent | RouteRecordRaw) {
    const isEvent = e instanceof Event
    if (isEvent)
      e.preventDefault()
    const item = isEvent ? menu : e
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
</script>

<template>
  <DefineMenuTitle v-slot="{ menu }">
    <slot v-if="$slots.default" name="default" v-bind="menu" />
    <div v-else class="menu-item" style="width:100%" v-bind="bindMenuItemEvents(menu)">
      <el-icon v-if="menu.meta?.icon" class="menu-icon">
        <Icon :icon="menu.meta?.icon" />
      </el-icon>
      <span v-if="!collapse" class="menu-title">{{ menu.meta?.title }}</span>
    </div>
  </DefineMenuTitle>

  <DefineMenuItem v-slot="{ routes }">
    <template v-for="menu in routes" :key="menu[indexKey]">
      <el-sub-menu v-if="menu.children?.length" v-bind="elSubMenuProps" :index="menu[indexKey as 'path']">
        <template #title>
          <MenuTitle :menu="menu" />
        </template>
        <MenuItem :routes="menu.children" v-bind="bindMenuItemEvents(menu)" />
      </el-sub-menu>
      <el-menu-item v-else :index="menu[indexKey as 'path']" :route="menu" :disabled="menu.meta?.disabled as boolean">
        <MenuTitle :menu="menu" />
      </el-menu-item>
    </template>
  </DefineMenuItem>

  <el-menu v-bind="elMenuProps" class="ep-menu" :default-active="activeMenuIndex" @select="onMenuSelect">
    <MenuItem :routes="routes" />
  </el-menu>
</template>
