<script setup lang="ts">
import type { MenuEmits, MenuSlots } from './props'
import type { RouteRecordRaw } from 'vue-router'

import { useVModels } from '@vueuse/core'
import { menuProps as elMenuProps } from 'element-plus'
import { pick, pickBy } from 'lodash-unified'
import { computed, onMounted, reactive, ref } from 'vue'

import MenuItem from './MenuItem.vue'
import { menuEmits, menuItemProps, menuProps } from './props'

const props = defineProps(menuProps)
const emit = defineEmits(menuEmits)
defineSlots<MenuSlots>()

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
function onClick(route: RouteRecordRaw) {
  emit('click', route)
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
  <el-menu
    v-bind="bindMenuProps" ref="menuRef" class="pro-menu" :default-active="activeMenuIndex"
    @select="onMenuSelect"
  >
    <MenuItem
      v-for="route in routes" :key="route[indexKey]" v-bind="bindMenuItemProps" :route="route"
      @click="onClick"
    >
      <template v-if="$slots.default" #default="scope">
        <slot v-bind="scope" />
      </template>
    </MenuItem>
  </el-menu>
</template>
