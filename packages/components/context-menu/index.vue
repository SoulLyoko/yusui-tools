<script setup lang="ts">
import type { ContextMenuItem, ContextMenuProps } from './types'

import { computed, ref } from 'vue'
import { createReusableTemplate, onClickOutside, useEventListener, useVModels } from '@vueuse/core'

const props = withDefaults(defineProps<ContextMenuProps>(), { x: '', y: '' })
const emit = defineEmits<{
  select: [item: ContextMenuItem]
}>()
const { modelValue, x, y } = useVModels(props, undefined, { passive: true })

const left = computed(() => transformPx(x.value))
const top = computed(() => transformPx(y.value))
function transformPx(px?: number | string) {
  return typeof px === 'number' ? `${px}px` : String(px)
}

const contextMenuRef = ref()
onClickOutside(contextMenuRef, () => (modelValue.value = false))
useEventListener(() => props.triggerRef, 'contextmenu', (e) => {
  e.preventDefault()
  x.value = e.x
  y.value = e.y
  modelValue.value = true
})

function onItemClick(item: ContextMenuItem) {
  if (item.children?.length)
    return
  modelValue.value = false
  emit('select', item)
}

const [DefineDropdownItem, DropdownItem] = createReusableTemplate<{ item: ContextMenuItem }>()
</script>

<template>
  <DefineDropdownItem v-slot="{ item }">
    <el-popover
      :disabled="!item.children?.length" :show-arrow="false" :offset="0" placement="right-start"
      popper-class="is-pure el-dropdown__popper" width="auto"
    >
      <template #reference>
        <li class="el-dropdown-menu__item" @click="onItemClick(item)">
          <i>
            <Icon :icon="item.icon" />
          </i>
          <span>{{ item.label }}</span>
          <Icon v-if="item.children?.length" icon="ep:arrow-right" />
        </li>
      </template>
      <ul class="el-dropdown-menu">
        <DropdownItem v-for="(subItem, index) in item.children" :key="index" :item="subItem" />
      </ul>
    </el-popover>
  </DefineDropdownItem>

  <el-popover
    :visible="modelValue" :show-arrow="false" :popper-style="{ top, left }"
    popper-class="is-pure el-dropdown__popper" width="auto"
  >
    <ul ref="contextMenuRef" class="el-dropdown-menu">
      <DropdownItem v-for="(item, index) in data" :key="index" :item="item" />
    </ul>
  </el-popover>
</template>
