import type { Ref } from 'vue'
import type { TreeInstance } from 'element-plus'
import type { EpTreeProps } from '../types'

import { computed, ref, toRefs, watch } from 'vue'
import { ElInput } from 'element-plus'
import { pick } from 'lodash-unified'

export function useInput(props: EpTreeProps, { treeRef }: { treeRef: Ref<TreeInstance | undefined> }) {
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

  return {
    ...pick(toRefs(props), Object.keys(ElInput.props)),
    placeholder,
    'modelValue': searchValue,
    'onUpdate:modelValue': (val: string) => (searchValue.value = val),
  }
}
