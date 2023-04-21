<script setup lang="ts">
import type { FlowDeploy } from '../api/flow-deploy'
import type { FlowFormProps } from '../flow-form/composables'

import { ref } from 'vue'

import { getPublishFlow } from '../api/flow-deploy'
import { useFlowForm } from '../flow-form/composables'

const flowList = ref<FlowDeploy[]>([])

getPublishFlow().then((res) => {
  flowList.value = res.data
})

const flowProps = ref<FlowFormProps>({})
const { open, close } = useFlowForm(flowProps, { type: 'drawer' })
function openFlow(row: FlowDeploy) {
  flowProps.value = {
    flowKey: row.flowKey,
    onComplete: close,
  }
  open()
}
</script>

<template>
  <div class="flow-list">
    <div v-for="item in flowList" :key="item.flowKey" class="flow-item" @click="openFlow(item)">
      <v-icon class="flow-icon" :icon="item.flowIcon" width="60" />
      <div class="flow-name">
        {{ item.flowName }}
      </div>
    </div>
  </div>
  <!-- <FlowForm v-model:visible="flowFormVisible" :flow-key="flowKey" /> -->
</template>

<style lang="scss" scoped>
.flow-list {
  .flow-item {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: 100px;
    vertical-align: top;

    .flow-icon {
      display: inline;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
