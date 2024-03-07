import type { Ref } from 'vue'
import type { ElTreeNode } from '@yusui/types'
import type { EpTreeProps, TreeInstance } from '../types'

import { computed } from 'vue'

export function useTag(props: EpTreeProps, { emit, treeRef }: { emit: any, treeRef: Ref<TreeInstance | undefined> }) {
  const checkedNodes = computed(() => {
    if (props.multiple) {
      const nodes = treeRef.value?.getCheckedNodes(!props.checkStrictly)
      return nodes ?? []
    }
    else {
      const node = treeRef.value?.getNode(props.modelValue as string)?.data
      return node ? [node] : []
    }
  })

  function onTagClose(data: ElTreeNode['data']) {
    const checkedKeys = props.multiple ? (props.modelValue as string[]).filter(e => e !== data[props.nodeKey!]) : ''
    emit('update:modelValue', checkedKeys)
  }

  return {
    checkedNodes,
    onTagClose,
  }
}
