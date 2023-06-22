import type { IconSelectProps } from '../types'
import type { Ref } from 'vue'

import { onUnmounted, ref } from 'vue'

export function usePopCliboard(props: IconSelectProps, modelValue: Ref<string>) {
  const popVisible = ref(false)

  let interval: any
  async function onPopShow() {
    popVisible.value = true
    clearInterval(interval)
    if (!globalThis.navigator.clipboard || props.collections)
      return
    await globalThis.navigator.clipboard.writeText('')
    interval = setInterval(async () => {
      const text = await globalThis.navigator.clipboard.readText()
      if (text && modelValue.value !== text)
        modelValue.value = text
    })
  }
  function onPopHide() {
    popVisible.value = false
    clearInterval(interval)
  }
  onUnmounted(() => {
    clearInterval(interval)
  })

  return { popVisible, onPopShow, onPopHide }
}
