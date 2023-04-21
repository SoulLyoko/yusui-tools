<script setup lang="ts">
import type { FlowDetail } from '../../api/flow-task'

import { computed, ref } from 'vue'

import FormDesignWrapper from '../../components/flow-design-wrapper/index.vue'

const props = defineProps<{
  flowDetail?: FlowDetail
}>()
const typeList = [
  { label: 'table', icon: 'ep:grid' },
  { label: 'graph', icon: 'ep:picture' },
  { label: 'timeline', icon: 'ep:finished' },
]
const activeType = ref('table')

const tableData = computed(() => {
  return props.flowDetail?.flowHistory?.filter(e => e.taskNodeType === 'userTask') ?? []
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
    { label: '操作类型', prop: 'type' },
    { label: '审批意见', prop: 'comment', bind: 'comment.comment' },
  ],
}
</script>

<template>
  <el-radio-group v-model="activeType">
    <el-radio-button v-for="item in typeList" :key="item.label" :label="item.label">
      <v-icon :icon="item.icon" />
    </el-radio-button>
  </el-radio-group>
  <div class="flow-track">
    <avue-crud v-if="activeType === 'table'" class="hide-menu" :data="tableData" :option="tableOption" />
    <FormDesignWrapper
      v-if="activeType === 'graph'"
      :model-value="flowDetail?.process?.flowData"
      :flow-history="flowDetail?.flowHistory"
      view
    />
    <el-timeline v-if="activeType === 'timeline'">
      <el-timeline-item
        v-for="item in [...tableData].reverse()"
        :key="item.id"
        :timestamp="item.createTime"
        placement="top"
      >
        <el-card>
          <div>
            {{ item.assigneeName }} 开始处理 [{{ item.taskNodeName }}] 环节
          </div>
          <div v-if="item.duration">
            办理时长：{{ item.duration }}
          </div>
          <div v-if="item.type">
            <!-- {{ findDict(item.type)?.label }}意见：{{ item.comment?.comment }} -->
            {{ item.type }}意见：{{ item.comment?.comment }}
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
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
