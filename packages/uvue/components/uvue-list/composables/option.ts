import type { UvueListOption } from '../types'

import { computed } from 'vue'

import { useConfigProvider } from '../../../composables/config'

export function useOption(props: any) {
  const globalOption = useConfigProvider()
  const option = computed(() => {
    return {
      ...globalOption.listOption,
      ...props.option,
    } as UvueListOption
  })

  return { option }
}
