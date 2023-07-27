<script setup lang="ts">
import type { FlowButton, FlowDetail, UseFlowFormOptions } from '@yusui/flow-pages'

import { computed, ref } from 'vue'
import { useTitle, useUrlSearchParams } from '@vueuse/core'
import { useConfigProvider } from '@yusui/flow-pages'

const query = useUrlSearchParams<UseFlowFormOptions>()
const flowDetail = ref<FlowDetail>({})

const { FlowForm } = useConfigProvider()

const title = computed(() => {
  const instance = flowDetail.value.flowInstance
  if (query.detail === true || query.detail === 'true')
    return `查看流程：${instance?.title}`
  else if (query.instanceId || query.taskId)
    return `办理流程：${instance?.title}`
  else
    return `发起流程：${instance?.title}`
})
useTitle(title)

async function onComplete(btn: FlowButton) {
  window.postMessage({ event: 'onComplete', data: { ...btn } })
}
</script>

<template>
  <FlowForm
    v-model:flowDetail="flowDetail"
    v-bind="query"
    @complete="onComplete"
  />
</template>
