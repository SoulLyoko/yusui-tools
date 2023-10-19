<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { EpMenuEmits, EpMenuProps, OnSelectParams } from './types'

import { computed } from 'vue'
import { useVModels } from '@vueuse/core'
import { menuProps } from 'element-plus'
import { pick } from 'lodash-unified'

import MenuItem from './MenuItem.vue'

const props = withDefaults(
  defineProps<EpMenuProps>(),
  { indexKey: 'path' },
)
const emit = defineEmits<EpMenuEmits>()
const { modelValue: activeMenuIndex } = useVModels(props)

const elMenuProps = computed(() => {
  return pick(props, Object.keys(menuProps))
})
function onMenuSelect(...args: OnSelectParams) {
  activeMenuIndex!.value = args[0]
  emit('select', ...args)
}
function onMenuItemClick(route: RouteRecordRaw) {
  emit('item-click', route)
}
function onMenuItemContextmenu(route: RouteRecordRaw) {
  emit('item-contextmenu', route)
}
</script>

<template>
  <el-menu v-bind="elMenuProps" class="ep-menu" :default-active="activeMenuIndex" @select="onMenuSelect">
    <MenuItem :routes="routes" @click="onMenuItemClick" @contextmenu="onMenuItemContextmenu" />
  </el-menu>
</template>
