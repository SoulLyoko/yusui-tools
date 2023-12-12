<script setup lang="ts">
// eslint-disable-next-line ts/consistent-type-imports
import type { ElTree } from 'element-plus'
import type { LoadFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { ApprovalNode } from '@yusui/flow-pages'

import { computed, ref } from 'vue'
import { useVModels, watchDebounced } from '@vueuse/core'
import { differenceBy } from 'lodash-es'
import { treeMap, uuid } from '@yusui/utils'

const props = defineProps<{
  modelValue: ApprovalNode[]
  data: ApprovalNode[]
  autoCheck?: boolean
  mode?: 'vertical' | 'horizontal'
}>()
const { modelValue } = useVModels(props)

const iconMap: Record<string, string> = {
  element: 'ep:flag',
  post: 'ep:share',
  dept: 'ep:share',
  user: 'ep:user',
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const treeData = computed(() => {
  return treeMap(props.data ?? [], (item, index, parent) => {
    const id = uuid()
    item.taskNodeKey = parent?.taskNodeKey ?? item.taskNodeKey
    item.incoming = parent?.incoming ?? item.incoming
    item.multiple = parent?.multiple ?? item.multiple
    item.parentId = parent?.id ?? item.parentId
    return { ...item, id }
  })
})
const treeLoad: LoadFunction = (node, resolve) => {
  if (node.level === 0)
    resolve(treeData.value)
  else
    resolve(node.data.children ?? [])
}
const treeProps = {
  defaultExpandAll: true,
  lazy: true,
  showCheckbox: true,
  nodeKey: 'id',
  load: treeLoad,
  onCheck,
  props: {
    label: 'title',
    class(data: ApprovalNode) {
      return `node-${data.type}`
    },
  },
}

watchDebounced(
  () => [treeData.value, treeRef.value],
  async () => {
    if (!treeRef.value || !treeData.value.length)
      return
    if (props.autoCheck) {
      // 只有一个节点时自动选择
      const checkedNode = getUniqueNode(treeData.value)
      checkedNode && setCheckedNodes([checkedNode])
    }
    // 展开节点
    // const expandedNodes = filterTree(treeData.value, e => !!e.children?.length)
    // expandedNodes.map(async (data) => {
    //   await sleep(100)
    //   const node = treeRef.value?.getNode(data)
    //   node?.expand()
    // })
  },
  { immediate: true, debounce: 100 },
)

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

  // let nodes = checkedNodes.filter(e => e.type === 'user')
  // const isChecked = nodes.some(e => e.id === data.id)
  // if (!data.multiple && isChecked) {
  //   // 排除掉兄弟节点
  //   const currentNode = treeRef.value?.getNode(data)
  //   const currentChildren = currentNode!.parent.data.children as ApprovalNode[]
  //   const siblingNodes = currentChildren.filter(e => e.id !== data.id)
  //   nodes = differenceBy(nodes, siblingNodes, 'id')
  // }
  // if (treeData.value[0].type === 'exclusiveGateway' && isChecked) {
  //   // 互斥网关，排除掉非相同父节点的节点
  //   const commonParentNodes = nodes.filter(e => e.parentId === data.parentId)
  //   nodes = commonParentNodes
  // }
  // setCheckedNodes(nodes)
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
  <el-tree ref="treeRef" class="approval-tree" :class="`mode-${mode}`" :data="treeData" v-bind="treeProps">
    <template #default="{ data: nodeData }">
      <div>
        <Icon :icon="iconMap[nodeData.type] || iconMap.element" style="display: inline-block" />
        <span>{{ nodeData.title }}</span>
      </div>
    </template>
  </el-tree>
</template>

<style lang="scss" scoped>
.approval-tree {
  max-height: 300px;
  overflow-x: auto;

  &.mode-horizontal:deep(.el-tree-node__children) {
    white-space: normal;

    .node-user {
      display: inline-block;
      min-width: 130px;

      .el-tree-node__content {
        padding-right: 20px;
      }

      &:not(:first-child, :nth-child(6n)) {
        .el-tree-node__content {
          padding-left: 0 !important;
        }
      }
    }
  }
}
</style>
