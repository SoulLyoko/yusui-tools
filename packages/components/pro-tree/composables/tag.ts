import type { ProTreeProps } from '../types'
import type { ElTreeNode } from '@yusui/types'
import type { TreeInstance } from 'element-plus'
import type { Ref } from 'vue'

import { computed } from 'vue'

export function useTag(props: ProTreeProps, { emit, treeRef }: { emit: any, treeRef: Ref<TreeInstance | undefined> }) {
  const checkedNodes = computed(() => {
    if (props.multiple) {
      const nodeDatas = treeRef.value?.getCheckedNodes(!props.checkStrictly)
      const nodes = nodeDatas?.map(e => treeRef.value?.getNode(e) as ElTreeNode)?.filter(e => e)
      return nodes ?? []
    }
    else {
      const node = treeRef.value?.getNode(props.modelValue as string)
      return node ? [node] : []
    }
  })

  function onTagClose(node: ElTreeNode) {
    const checkedKeys = props.multiple ? (props.modelValue as string[]).filter(e => e !== node.key) : ''
    emit('update:modelValue', checkedKeys)
    emit('tag-close', node)
  }
  function onTagClick(node: ElTreeNode) {
    emit('tag-click', node)
  }

  return {
    checkedNodes,
    onTagClose,
    onTagClick,
  }
}
