import type { ProTreeProps } from '../types'
import type { TreeInstance } from 'element-plus'
import type { Ref } from 'vue'

import { sleep } from '@yusui/utils'
import { ElSelect, ElTree } from 'element-plus'
import { pick } from 'lodash-es'
import { toRefs, useAttrs } from 'vue'

export function useSelect(props: ProTreeProps, { emit, treeRef }: { emit: any, treeRef: Ref<TreeInstance | undefined> }) {
  const attrs = useAttrs() as any

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
    emit('update:modelValue')
    emit('clear')
  }

  async function onBlur() {
    await sleep(0)
    treeRef.value?.filter('')
    emit('blur')
  }

  return {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    filterMethod,
    onRemoveTag,
    onClear,
    onBlur,
  }
}
