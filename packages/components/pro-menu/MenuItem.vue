<script setup lang="ts">
import type { MenuItemSlots } from './props'

import { subMenuProps } from 'element-plus'
import { debounce, pick } from 'lodash-unified'
import { computed } from 'vue'

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

const debounceEmit = debounce((event, data) => emit(event, data))
</script>

<template>
  <el-sub-menu
    v-if="route.children?.length" v-bind="bindSubMenuProps" :index="route[indexKey as 'path']"
    :disabled="route.meta?.disabled" @click="debounceEmit('click', route)"
  >
    <template #title>
      <el-icon v-if="route.meta?.icon" class="pro-menu-icon">
        <Icon :icon="route.meta?.icon" />
      </el-icon>
      <span class="pro-menu-title">{{ route.meta?.title }}</span>
    </template>
    <MenuItem
      v-for="childRoute in route.children" :key="childRoute[indexKey]" :route="childRoute"
      @click="debounceEmit('click', $event)"
    >
      <template v-if="$slots.default" #default="scope">
        <slot v-bind="scope" />
      </template>
    </MenuItem>
  </el-sub-menu>
  <el-menu-item
    v-else :index="route[indexKey as 'path']" :route="route" :disabled="route.meta?.disabled"
    v-bind="bindMenuItemProps" @click="debounceEmit('click', route)"
  >
    <el-icon v-if="route.meta?.icon" class="pro-menu-icon">
      <Icon :icon="route.meta?.icon" />
    </el-icon>
    <template #title>
      <span class="pro-menu-title">{{ route.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>
