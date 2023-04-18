<script setup lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node.d'
import type { DesignAction, ElementTreeNode } from '../../types'

import { ElTree } from 'element-plus'
import { computed, ref, watchEffect } from 'vue'
import { cloneDeep } from 'lodash-unified'

import { useInjectState } from '../../composables'
import { checkRules, copyItem } from '../../utils'

const { elementTree, activeElement, hoverElement, setActiveElement, recordHistory, getResource } = useInjectState()

const treeData = computed(() => {
  return [cloneDeep(elementTree.value)]
})

function allowDrop(
  draggingNode: { data: ElementTreeNode },
  dropNode: { data: ElementTreeNode; level: number },
  type: string,
) {
  // 顶级不能被放置
  if (dropNode.data.isRoot)
    return false
  if (type === 'inner')
    return checkRules(getResource(draggingNode.data.name), getResource(dropNode.data.name))

  return true
}

const treeRef = ref<InstanceType<typeof ElTree>>()

watchEffect(() => {
  treeRef.value?.setCurrentKey(activeElement.value?.id)
})

function onNodeClick(data: ElementTreeNode) {
  setActiveElement(data)
}

function updateList() {
  elementTree.value = treeData.value[0]
}
function onCopy(node: Node & { data: ElementTreeNode }) {
  const item = copyItem(node.data)
  treeRef.value?.append(item, node.parent)
  updateList()
  setActiveElement(item)
  recordHistory('added')
}
function onRemove(node: Node & { data: ElementTreeNode }) {
  treeRef.value?.remove(node)
  updateList()
  setActiveElement()
  recordHistory('removed')
}
function onClearChildren(node: Node & { data: ElementTreeNode }) {
  if (!node.data.children?.length)
    return
  node.data.children.forEach(e => treeRef.value?.remove(e))
  updateList()
  setActiveElement(node.data)
  recordHistory('clear')
}
function onNodeDrop() {
  updateList()
  recordHistory('moved')
}

const actions = [
  { name: 'copy', type: 'primary', icon: 'el-icon-copy-document', handler: onCopy },
  { name: 'delete', type: 'danger', icon: 'el-icon-delete', handler: onRemove },
  { name: 'clear', type: 'warning', icon: 'el-icon-folder-delete', handler: onClearChildren },
]
function getActionList(element: ElementTreeNode) {
  return actions.filter(e => showActions(element, e.name as DesignAction))
}
function showActions(element: ElementTreeNode, type: DesignAction) {
  const { disabledActions, isContainer } = getResource(element.name) ?? {}
  const enable = !disabledActions?.includes(type)
  if (type === 'clear')
    return isContainer && enable

  return enable
}
</script>

<template>
  <ElTree
    ref="treeRef"
    class="component-tree"
    node-key="id"
    :data="treeData"
    default-expand-all
    draggable
    :expand-on-click-node="false"
    :allow-drop="allowDrop"
    @node-click="onNodeClick"
    @node-drop="onNodeDrop"
  >
    <template #default="{ node, data }: { node: any, data: ElementTreeNode }">
      <div class="tree-item" @mouseover="hoverElement = data || {}" @mouseleave="hoverElement = {}">
        <div class="item-label">
          {{ data.props?.label || getResource(data.name)?.title }}
        </div>
        <div class="item-actions">
          <el-link
            v-for="action in getActionList(data)"
            :key="action.name"
            v-bind="action"
            :underline="false"
            @click.stop="action.handler(node)"
          />
        </div>
      </div>
    </template>
  </ElTree>
</template>
