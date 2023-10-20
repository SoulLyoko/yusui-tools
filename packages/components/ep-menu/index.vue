<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { MenuEmits, MenuSlots } from './props'

import { computed, onMounted, reactive, ref } from 'vue'
import { pick, pickBy } from 'lodash-unified'
import { useVModels } from '@vueuse/core'
import { menuProps as elMenuProps } from 'element-plus'

import MenuItem from './MenuItem.vue'
import { menuEmits, menuItemProps, menuProps } from './props'

const props = defineProps(menuProps)
const emit = defineEmits(menuEmits)
const slots = defineSlots<MenuSlots>()

const { modelValue: activeMenuIndex } = useVModels(props)

const bindMenuProps = computed(() => {
  return pick(props, Object.keys(elMenuProps))
})
const bindMenuItemProps = computed(() => {
  return pick(props, Object.keys(menuItemProps))
})

function onMenuSelect(...args: Parameters<MenuEmits['select']>) {
  activeMenuIndex!.value = args[0]
  emit('select', ...args)
}
function onMenuItemClick(route: RouteRecordRaw) {
  emit('item-click', route)
}
function onMenuItemContextmenu(route: RouteRecordRaw) {
  emit('item-contextmenu', route)
}

const menuRef = ref()
const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const menuMethods = pickBy(menuRef.value ?? {}, value => typeof value === 'function')
  Object.assign(methods, menuMethods)
})
</script>

<template>
  <el-menu v-bind="bindMenuProps" ref="menuRef" class="ep-menu" :default-active="activeMenuIndex" @select="onMenuSelect">
    <template #default>
      <MenuItem v-bind="bindMenuItemProps" @click="onMenuItemClick" @contextmenu="onMenuItemContextmenu">
        <template v-if="$slots.default" #default="scope">
          <slot v-bind="scope" />
        </template>
      </MenuItem>
    </template>
  </el-menu>
</template>
