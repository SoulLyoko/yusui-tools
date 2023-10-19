<script setup lang="ts">
import type { EpMenuEmits, EpMenuProps, EpMenuSlots, OnSelectParams } from './types'
import type { RouteRecordRaw } from 'vue-router'

import { computed, onMounted, reactive, ref } from 'vue'
import { pick, pickBy } from 'lodash-unified'
import { useVModels } from '@vueuse/core'
import { menuProps } from 'element-plus'

import MenuItem from './MenuItem.vue'

const props = withDefaults(
  defineProps<EpMenuProps>(),
  { indexKey: 'path' },
)
const emit = defineEmits<EpMenuEmits>()
const slots = defineSlots<EpMenuSlots>()

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

const menuRef = ref()
const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const menuMethods = pickBy(menuRef.value ?? {}, value => typeof value === 'function')
  Object.assign(methods, menuMethods)
})
</script>

<template>
  <el-menu v-bind="elMenuProps" ref="menuRef" class="ep-menu" :default-active="activeMenuIndex" @select="onMenuSelect">
    <MenuItem :routes="routes" @click="onMenuItemClick" @contextmenu="onMenuItemContextmenu">
      <template v-if="$slots.default" #default="scope">
        <slot v-bind="scope" />
      </template>
    </MenuItem>
  </el-menu>
</template>
