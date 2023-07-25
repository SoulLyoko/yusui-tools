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
  return (query.instanceId || query.taskId) ? `流程详情：${instance?.title}` : `发起流程：${instance?.title}`
})
useTitle(title)

async function onComplete(btn: FlowButton) {
  window.postMessage({ event: 'onComplete', data: { ...btn } })
}
</script>

<template>
  <FlowForm
    v-model:flowDetail="flowDetail"
    :task-id="query.taskId"
    :instance-id="query.instanceId"
    :detail="query.detail"
    :flow-key="query.flowKey"
    @complete="onComplete"
  />
</template>
