import type Node from 'element-plus/es/components/tree/src/model/node'
import type { Ref } from 'vue'
import type { InputTreeProps, TreeInstance } from '../types'

import { computed, ref, watch } from 'vue'
import { ElInput } from 'element-plus'
import { pick } from 'lodash-unified'

export function useInputTags(props: InputTreeProps, { emit, treeRef }: { emit: any; treeRef: Ref<TreeInstance | undefined> }) {
  const searchValue = ref('')
  watch(searchValue, (val) => {
    treeRef.value?.filter(val)
  })

  const placeholder = computed(() => {
    if (Array.isArray(props.modelValue))
      return props.modelValue.length ? '' : props.placeholder
    else if (typeof props.modelValue === 'string')
      return props.modelValue ? '' : props.placeholder
    return ''
  })

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

  function onTagClose(data: Node['data']) {
    const checkedKeys = props.multiple ? (props.modelValue as string[]).filter(e => e !== data[props.nodeKey!]) : ''
    emit('update:modelValue', checkedKeys)
  }

  return {
    checkedNodes,
    inputProps: {
      ...pick(props, Object.keys(ElInput.props)),
      placeholder,
      'modelValue': searchValue,
      'onUpdate:modelValue': (val: string) => (searchValue.value = val),
    },
    tagProps: {
      type: computed(() => props.tagType),
      closable: true,
      onClose: onTagClose,
    },
  }
}
