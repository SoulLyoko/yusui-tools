<script setup lang="ts">
import type { ElementTreeNode } from '../../types'
import type { DesignActionKey, HistoryTypeKey } from '../../constants'

import { nextTick } from 'vue'
import { useVModels } from '@vueuse/core'
import Draggable from 'vuedraggable'

// eslint-disable-next-line import/no-self-import
import Design from './design.vue'
import DesignItem from './design-item.vue'
import { useInjectState } from '../../composables'
import { checkRules, copyItem } from '../../utils'

const props = defineProps<{ list: ElementTreeNode[], componentData: ElementTreeNode }>()
const emit = defineEmits(['update:active', 'update:list'])
const { list } = useVModels(props, emit, { passive: true, deep: true })

const { activeElement, hoverElement, formOption, setActiveElement, recordHistory, getResource } = useInjectState()

function getItemSpan(element: ElementTreeNode) {
  if (getResource(element.name)?.isContainer)
    return 24
  return element.props?.span || formOption.value.span || 24
}

async function onChange(operation: Record<string, { element?: ElementTreeNode }>) {
  const operationName = Object.keys(operation)[0] as HistoryTypeKey
  if (!operationName)
    return
  setActiveElement()
  await nextTick()
  setActiveElement(operation[operationName]?.element)
  recordHistory(operationName)
}

function onCopy(element: ElementTreeNode) {
  const item = copyItem(element)
  list.value.push(item)
  setActiveElement(item)
  recordHistory('added')
}
function onRemove(element: ElementTreeNode, index: number) {
  list.value.splice(index, 1)
  setActiveElement(list.value[index] ?? list.value[index - 1])
  recordHistory('removed')
}
function onClearChildren(element: ElementTreeNode) {
  if (!element.children?.length)
    return
  element.children = []
  setActiveElement(element)
  recordHistory('clear')
}

function onMove({
  draggedContext,
  relatedContext,
}: {
  draggedContext: { element: ElementTreeNode }
  relatedContext: { component: { componentData?: ElementTreeNode } }
}) {
  return checkRules(
    getResource(draggedContext.element.name),
    getResource(relatedContext.component.componentData?.name),
  )
}

const actions = [
  { name: 'copy' as const, type: 'primary' as const, icon: 'el-icon-copy-document', handler: onCopy },
  { name: 'delete' as const, type: 'danger' as const, icon: 'el-icon-delete', handler: onRemove },
  { name: 'clear' as const, type: 'warning' as const, icon: 'el-icon-folder-delete', handler: onClearChildren },
]
function getActionList(element: ElementTreeNode) {
  return actions.filter(e => showActions(element, e.name))
}
function showActions(element: ElementTreeNode, type: DesignActionKey) {
  const { disabledActions, isContainer } = getResource(element.name) ?? {}
  const enable = !disabledActions?.includes(type)
  if (type === 'clear')
    return isContainer && enable

  return enable
}
</script>

<template>
  <Draggable
    :list="list"
    class="el-row draggable-list"
    :class="{ 'is-empty': !list.length, 'is-root': componentData.isRoot }"
    :group="{ name: 'components' }"
    :component-data="componentData"
    item-key="id"
    :move="onMove"
    @change="onChange"
  >
    <template #item="{ element, index }: { element: ElementTreeNode, index: number }">
      <el-col
        class="draggable-item"
        :class="{
          'is-active': activeElement.id === element.id,
          'is-hover': hoverElement.name && hoverElement.id === element.id,
        }"
        :span="getItemSpan(element)"
        @click.stop="setActiveElement(element)"
        @mouseover.stop="hoverElement = element || {}"
        @mouseleave.stop="hoverElement = {}"
      >
        <DesignItem :element="element" />
        <Design
          v-if="getResource(element.name)?.isContainer"
          class="is-container"
          :component-data="element"
          :list="element.children ?? []"
          @update:list="element.children = $event"
        />
        <div v-show="activeElement.id === element.id" class="item-actions">
          <el-button
            v-for="action in getActionList(element)"
            :key="action.name"
            v-bind="action"
            circle
            plain
            @click.stop="action.handler(element, index)"
          />
        </div>
      </el-col>
    </template>
  </Draggable>
</template>
