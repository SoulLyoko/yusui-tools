import type { ProTreeProps } from '../types'
import type { TreeInstance } from 'element-plus'
import type { Ref } from 'vue'

import { flatTree } from '@yusui/utils'
import { ElSelect, ElSelectV2 } from 'element-plus'
import { camelCase, pick, upperFirst } from 'lodash-es'
import { computed, toRefs, useAttrs, watchEffect } from 'vue'

export function useSelect(props: ProTreeProps, { emit, selectRef, treeRef }: { emit: any, selectRef: Ref<any>, treeRef: Ref<TreeInstance | undefined> }) {
  const attrs = useAttrs() as any

  watchEffect(() => {
    if (!selectRef.value)
      return

    // 使输入框的值在丢失焦点后不被清空
    if (!selectRef.value.expanded)
      selectRef.value.expanded = true
    if (selectRef.value.dropdownMenuVisible) {
      selectRef.value.dropdownMenuVisible = false
    }
  })

  function filterMethod(keyword = '') {
    if (props.filterMethod) {
      props.filterMethod(keyword)
    }
    else if (props.remoteMethod) {
      props.remoteMethod(keyword)
    }
    else {
      // let tree node expand only, same with tree filter
      treeRef.value?.filter(keyword)
    }
  }

  function onRemoveTag(value: string) {
    const node = treeRef.value?.getNode(value)
    const checkedKeys = props.multiple ? (props.modelValue as string[]).filter(e => e !== node?.key) : ''
    emit('update:modelValue', checkedKeys)
    emit('remove-tag', value)
  }

  function onClear() {
    selectRef.value.states.inputValue = ''
    treeRef.value?.filter('')
    emit('update:modelValue')
    emit('clear')
  }

  return {
    ...pick(toRefs(props), Object.keys(ElSelect.props), Object.keys(ElSelectV2)),
    ...pick(attrs, ElSelect.emits!.map(e => upperFirst(camelCase(`on-${e}`)))),
    options: computed(() => flatTree(props.data ?? [], { childrenKey: props.props?.children })),
    props: computed(() => ({ ...props.props, value: props.nodeKey })),
    filterMethod,
    onRemoveTag,
    onClear,
  }
}
