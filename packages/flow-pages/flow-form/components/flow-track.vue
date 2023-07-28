<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { durationFormat } from '@yusui/utils'
import { isMobile, useConfigProvider, useFlowParamApi } from '@yusui/flow-pages'

import FlowDesignWrapper from '../../components/flow-design-wrapper/index.vue'
import { useInjectState } from '../composables'

const { flowDetail } = useInjectState()

const activeType = ref(isMobile() ? 'timeline' : 'table')
const typeList = [
  { label: 'table', icon: 'ep:grid' },
  { label: 'graph', icon: 'ep:picture' },
  { label: 'timeline', icon: 'ep:finished' },
]

const tableData = computed(() => {
  return flowDetail.value?.flowHistory?.filter(e => e.taskNodeType === 'userTask')?.map((e) => {
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
    { label: '办理意见', prop: 'comment', bind: 'comment.handleComment' },
  ],
}

const { request } = useConfigProvider()
const { data: handleTypeDic } = useFlowParamApi(request).useParam('flow.handle.type')
function findHandleTypeDicItem(value: number) {
  return handleTypeDic.value?.find(e => e.value === value)
}
</script>

<template>
  <el-radio-group v-if="!isMobile()" v-model="activeType">
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
            <div v-if="item.type && item.comment?.handleComment">
              {{ findHandleTypeDicItem(item.type)?.label }}意见：{{ item.comment?.handleComment }}
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
