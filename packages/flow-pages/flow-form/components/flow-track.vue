<script setup lang="ts">
import type { FlowDetail } from '../../api'

import { computed, ref } from 'vue'
import { durationFormat } from '@yusui/utils'
import { Icon } from '@iconify/vue'

import { useFlowParamApi } from '../../api'
import FlowDesignWrapper from '../../components/flow-design-wrapper/index.vue'

const props = defineProps<{ flowDetail?: FlowDetail }>()

const activeType = ref('table')
const typeList = [
  { label: 'table', icon: 'ep:grid' },
  { label: 'graph', icon: 'ep:picture' },
  { label: 'timeline', icon: 'ep:finished' },
]

const tableData = computed(() => {
  return props.flowDetail?.flowHistory?.filter(e => e.taskNodeType === 'userTask')?.map((e) => {
    return {
      ...e,
      duration: durationFormat(e.duration),
    }
  }) ?? []
})
const tableOption = {
  addBtn: false,
  menu: false,
  border: true,
  column: [
    { label: '节点名称', prop: 'taskNodeName' },
    { label: '处理人', prop: 'assigneeName' },
    { label: '接收时间', prop: 'startTime' },
    { label: '处理时间', prop: 'endTime' },
    { label: '办理时长', prop: 'duration' },
    {
      label: '操作类型',
      prop: 'type',
      dicUrl: '/sapier-flow/flow-param/getParam',
      dicQuery: { paramKey: 'flow.handle.type' },
    },
    { label: '办理意见', prop: 'comment', bind: 'comment.comment' },
  ],
}

const { data: handleTypeDic } = useFlowParamApi().useParam('flow.handle.type' as const)
function findHandleTypeDicItem(value: number) {
  return handleTypeDic.value?.find(e => e.value === value)
}
</script>

<template>
  <el-radio-group v-model="activeType">
    <el-radio-button v-for="item in typeList" :key="item.label" :label="item.label">
      <Icon :icon="item.icon" />
    </el-radio-button>
  </el-radio-group>
  <div class="flow-track">
    <avue-crud v-if="activeType === 'table'" :data="tableData" :option="tableOption" />
    <FlowDesignWrapper
      v-if="activeType === 'graph'" :model-value="flowDetail?.process?.flowData"
      :flow-history="flowDetail?.flowHistory" view show-legend
    />
    <template v-if="activeType === 'timeline'">
      <el-timeline v-if="tableData.length">
        <el-timeline-item v-for="item in [...tableData].reverse()" :key="item.id" :timestamp="item.endTime" placement="top">
          <el-card>
            <div>
              {{ item.assigneeName }} 开始处理 [{{ item.taskNodeName }}] 环节
            </div>
            <div v-if="item.duration">
              办理时长：{{ item.duration }}
            </div>
            <div v-if="item.type && item.comment?.comment">
              {{ findHandleTypeDicItem(item.type)?.label }}意见：{{ item.comment?.comment }}
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <el-empty v-else />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.flow-track {
  height: calc(100% - 50px);
  margin-top: 15px;

  .avue-crud {
    :deep(.avue-crud__menu) {
      display: none;
    }
  }
}
</style>
