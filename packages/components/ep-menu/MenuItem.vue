<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { EpMenuItemEmits, EpMenuItemProps, EpMenuItemSlots } from './types'

import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { subMenuProps } from 'element-plus'
import { pick } from 'lodash-unified'

const props = withDefaults(
  defineProps<EpMenuItemProps>(),
  { indexKey: 'path' },
)
const emit = defineEmits<EpMenuItemEmits>()
const slots = defineSlots<EpMenuItemSlots>()

const elSubMenuProps = computed(() => {
  return pick(props, Object.keys(subMenuProps))
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
</script>

<template>
  <DefineMenuTitle v-slot="{ route }">
    <slot v-if="$slots.default" v-bind="route" />
    <div v-else class="menu-item" style="width:100%" v-bind="bindMenuItemEvents(route)">
      <el-icon v-if="route.meta?.icon" class="menu-icon">
        <Icon :icon="route.meta?.icon" />
      </el-icon>
      <span v-if="!collapse" class="menu-title">{{ route.meta?.title }}</span>
    </div>
  </DefineMenuTitle>

  <template v-for="route in routes" :key="route[indexKey]">
    <el-sub-menu v-if="route.children?.length" v-bind="elSubMenuProps" :index="route[indexKey as 'path']">
      <template #title>
        <MenuTitle :route="route" />
      </template>
      <MenuItem :routes="route.children" v-bind="bindMenuItemEvents(route)">
        <template v-if="$slots.default" #default="scope">
          <slot v-bind="scope" />
        </template>
      </MenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="route[indexKey as 'path']" :route="route" :disabled="route.meta?.disabled">
      <MenuTitle :route="route" />
    </el-menu-item>
  </template>
</template>
