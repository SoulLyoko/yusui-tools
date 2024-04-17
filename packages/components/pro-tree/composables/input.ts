import type { Ref } from 'vue'
import type { TreeInstance } from 'element-plus'
import type { ProTreeProps } from '../types'

import { computed, ref, toRefs, useAttrs, watch } from 'vue'
import { ElInput } from 'element-plus'
import { pick } from 'lodash-unified'

export function useInput(props: ProTreeProps, { emit, treeRef }: { emit: any, treeRef: Ref<TreeInstance | undefined> }) {
  const attrs = useAttrs() as any

  const searchValue = ref('')
  watch(searchValue, (val) => {
    treeRef.value?.filter(val)
  })
  watch(() => props.modelValue, () => {
    searchValue.value = ''
  })

  const placeholder = computed(() => {
    if (typeof props.modelValue === 'number' || props.modelValue?.length)
      return ''
    return props.placeholder
  })

  function onClear() {
    searchValue.value = ''
    emit('update:modelValue')
    attrs.onClear?.()
  }

  return {
    ...pick(toRefs(props), Object.keys(ElInput.props)),
    ...attrs,
    onClear,
    placeholder,
    'modelValue': searchValue,
    'onUpdate:modelValue': (val: string) => (searchValue.value = val),
  }
}
