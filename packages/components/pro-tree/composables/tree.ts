import type { Ref } from 'vue'
import type { TreeInstance } from 'element-plus'
import type { ElTreeNode } from '@yusui/types'
import type { ProTreeProps } from '../types'

import { computed, nextTick, onMounted, toRefs, useAttrs, watch } from 'vue'
import { ElTree } from 'element-plus'
import { isEqual, pick } from 'lodash-unified'

export function useTree(props: ProTreeProps, { emit, treeRef }: { emit: any, treeRef: Ref<TreeInstance | undefined> }) {
  const attrs = useAttrs() as any

  onMounted(() => {
    watch(
      () => props.modelValue,
      () => {
        if (props.multiple) {
          nextTick(() => {
            if (!isEqual(treeRef.value?.getCheckedKeys(), props.modelValue || []))
              treeRef.value?.setCheckedKeys(props.modelValue as string[] || [])
          })
        }
        else {
          nextTick(() => {
            if (!isEqual(treeRef.value?.getCurrentKey(), props.modelValue))
              treeRef.value?.setCurrentKey(props.modelValue as string || undefined)
          })
        }
      },
      {
        immediate: true,
        deep: true,
      },
    )
  })

  function onNodeClick(data: ElTreeNode['data'], node: ElTreeNode, e: any) {
    // `onCheck` is trigger when `checkOnClickNode`
    if (props.multiple && props.checkOnClickNode)
      return

    const dataValue = data[props.nodeKey!]

    // now `checkOnClickNode` is false, only no checkbox and `checkStrictly` or `isLeaf`
    if (!props.multiple && (props.checkStrictly || node.isLeaf))
      emit('update:modelValue', dataValue)

    else if (props.expandOnClickNode)
      e.proxy.handleExpandIconClick()

    nextTick(() => {
      treeRef.value?.setCurrentKey(props.modelValue as string || undefined)
      attrs.onNodeClick?.(data, node, e)
    })
  }

  function onCheck(data: ElTreeNode['data'], { checkedKeys }: { checkedKeys: string[] }) {
    // ignore when no checkbox, like only `checkOnClickNode` is true
    if (!props.multiple)
      return

    if (props.checkStrictly)
      emit('update:modelValue', checkedKeys)

    // only can select leaf node
    else
      emit('update:modelValue', treeRef.value?.getCheckedKeys(true))

    nextTick(() => {
      treeRef.value?.setCheckedKeys(props.modelValue as string[] || [])
      attrs.onCheck?.(data, {
        checkedKeys: treeRef.value?.getCheckedKeys(),
        checkedNodes: treeRef.value?.getCheckedNodes(),
        halfCheckedKeys: treeRef.value?.getHalfCheckedKeys(),
        halfCheckedNodes: treeRef.value?.getHalfCheckedNodes(),
      })
    })
  }

  function filterNodeMethod(value: string, data: ElTreeNode['data'], node: ElTreeNode) {
    if (props.filterNodeMethod)
      return props.filterNodeMethod(value, data, node)
    if (!value)
      return true
    return data.label.includes(value)
  }

  return {
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    showCheckbox: computed(() => props.multiple),
    highlightCurrent: computed(() => !props.multiple),
    expandOnClickNode: computed(() => !props.checkStrictly && props.expandOnClickNode),
    filterNodeMethod,
    onNodeClick,
    onCheck,
  }
}
