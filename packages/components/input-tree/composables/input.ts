import type { Ref } from 'vue'
import type { InputTreeProps, TreeInstance } from '../types'

import { computed, ref, watch } from 'vue'
import { ElInput } from 'element-plus'
import { pick } from 'lodash-unified'

export function useInput(props: InputTreeProps, { treeRef }: { treeRef: Ref<TreeInstance | undefined> }) {
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
    ...pick(props, Object.keys(ElInput.props)),
    placeholder,
    'modelValue': searchValue,
    'onUpdate:modelValue': (val: string) => (searchValue.value = val),
  }
}
