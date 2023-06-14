<script setup lang="ts">
import type { ElTree } from 'element-plus'
import type { ApprovalNode } from '../../api'

import { computed, ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { treeMap, uuid } from '@yusui/utils'
import { differenceBy } from 'lodash-es'

const props = defineProps<{ modelValue: ApprovalNode[]; data: ApprovalNode[] }>()
const { modelValue } = useVModels(props)

const treeRef = ref<InstanceType<typeof ElTree>>()
const treeProps = {
  class(data: ApprovalNode) {
    return data.type === 'user' ? 'node-user' : ''
  },
}
const treeData = computed(() => {
  return treeMap(props.data ?? [], (item, index, parent) => {
    const id = item.id || uuid()
    item.taskNodeKey = parent?.taskNodeKey ?? item.taskNodeKey
    item.incoming = parent?.incoming ?? item.incoming
    item.multiple = parent?.multiple ?? item.multiple
    return { ...item, id, label: item.title, disabled: item.type !== 'user' }
  })
})

const iconMap: Record<string, string> = {
  element: 'ep:flag',
  post: 'ep:share',
  dept: 'ep:share',
  user: 'ep:user',
}

watchEffect(() => {
  // 只有一个节点时自动选择
  const checkedNode = getUniqueNode(treeData.value)
  checkedNode && setCheckedNodes([checkedNode])
})

// 获取唯一的子节点
function getUniqueNode(data: ApprovalNode[]): ApprovalNode | undefined {
  if (data.length !== 1)
    return
  if (data[0].children?.length)
    return getUniqueNode(data[0].children)
  else
    return data[0]
}

async function onCheck(data: ApprovalNode, { checkedNodes }: { checkedNodes: ApprovalNode[] }) {
  let nodes = checkedNodes.filter(e => e.type === 'user')
  const isChecked = nodes.some(e => e.id === data.id)
  if (treeData.value.every(e => !e.multiple) && isChecked) {
    nodes = [data]
  }
  else if (!data.multiple && isChecked) {
    const currentNode = treeRef.value?.getNode(data)
    const currentChildren = currentNode!.parent.data.children as ApprovalNode[]
    const siblingNodes = currentChildren.filter(e => e.id !== data.id)
    nodes = differenceBy(nodes, siblingNodes, 'id')
  }
  setCheckedNodes(nodes)
}

function onTagClose(data: ApprovalNode) {
  const nodes = modelValue.value.filter(item => item.id !== data.id)
  setCheckedNodes(nodes)
}

function setCheckedNodes(nodes: ApprovalNode[]) {
  modelValue.value = nodes
  treeRef.value?.setCheckedNodes(nodes as any)
}
</script>

<template>
  <el-tag v-for="item in modelValue" :key="item.id" type="info" closable @close="onTagClose(item)">
    {{ item.title }}
  </el-tag>
  <el-tree
    ref="treeRef" class="approval-tree" :data="treeData" :props="treeProps" node-key="id" check-on-click-node
    default-expand-all show-checkbox @check="onCheck"
  >
    <template #default="{ data }">
      <div>
        <Icon :icon="iconMap[data.type]" style="display: inline-block" />
        <span>{{ data.title }}</span>
      </div>
    </template>
  </el-tree>
</template>

<style lang="scss" scoped>
.approval-tree {
  max-height: 300px;
  overflow-x: auto;

  :deep(.el-tree-node__children:has(>.node-user)) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 60px;

    .el-tree-node__content {
      padding-left: 0 !important;
      padding-right: 20px;
    }
  }
}
</style>
