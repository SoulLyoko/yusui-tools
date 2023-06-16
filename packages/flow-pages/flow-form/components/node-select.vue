<script setup lang="ts">
import { ref } from 'vue'
import { useVModels } from '@vueuse/core'

import { useInjectState } from '../composables'
import FlowDesignWrapper from '../../components/flow-design-wrapper/index.vue'

const props = defineProps<{ modelValue: string }>()
const { modelValue } = useVModels(props)

const { flowDetail } = useInjectState()

const popoverVisible = ref(false)

function onFlowNodeClick({ data }: { data: any }) {
  if (data.type !== 'userTask')
    return
  popoverVisible.value = false
  modelValue.value = data.id
}
</script>

<template>
  <el-popover v-model:visible="popoverVisible" placement="right" width="800px" trigger="click">
    <template #reference>
      <el-button>
        点击选择节点
      </el-button>
    </template>
    <FlowDesignWrapper
      :model-value="flowDetail?.process?.flowData" view style="height:600px"
      @nodeClick="onFlowNodeClick"
    />
  </el-popover>
</template>
