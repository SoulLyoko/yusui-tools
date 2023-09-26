<script setup lang="ts">
import { ref } from 'vue'
import { useVModels } from '@vueuse/core'
import { FlowDesignWrapper } from '@yusui/flow-pages'

import { useInjectState } from '../composables'

const props = defineProps<{ modelValue?: string }>()
const { modelValue } = useVModels(props)

const { flowDetail } = useInjectState()

const popoverVisible = ref(false)

function onFlowNodeClick({ data }: { data: any }) {
  if (data.type !== 'userTask')
    return
  popoverVisible.value = false
  modelValue!.value = data.id
}
</script>

<template>
  <el-popover v-model:visible="popoverVisible" placement="bottom-start" width="800px" trigger="click">
    <template #reference>
      <el-button>
        点击选择节点
      </el-button>
    </template>
    <FlowDesignWrapper
      :model-value="flowDetail?.process?.flowData" view style="height:600px"
      @node-click="onFlowNodeClick"
    />
  </el-popover>
</template>
