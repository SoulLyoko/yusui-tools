<script setup lang="ts">
import type { FlowDeploy } from '../../api/flow-deploy'
import type { FlowFormProps } from '../../flow-form/composables'
import type { FlowTask } from '../../api/flow-task'

import { ref } from 'vue'
import { useCrud } from '@yusui/composables'

import { getPublishFlow } from '../../api/flow-deploy'
import { getTodoList } from '../../api/flow-ops'
import { useFlowForm } from '../../flow-form/composables'
import { tableOption } from './option'

const flowList = ref<FlowDeploy[]>([])

getPublishFlow().then((res) => {
  flowList.value = res.data
})

const flowProps = ref<FlowFormProps>({})
const { open, close } = useFlowForm(flowProps, { type: 'drawer' })
function openFlow(row: FlowDeploy | FlowTask) {
  flowProps.value = {
    flowKey: (row as FlowDeploy).flowKey,
    taskId: (row as FlowTask).taskId,
    instanceId: (row as FlowTask).flowInstanceId,
    onComplete: () => {
      close()
      getDataList()
    },
  }
  open()
}

const {
  bindVal,
  getDataList,
  crudStateRefs: { searchForm },
} = useCrud({
  tableOption,
  crudOption: {
    getList: getTodoList,
  },
  searchForm: {
    status: 2,
  },
})
const flowStatusDic = [
  { label: '待办', value: 2 },
  { label: '已办', value: 1 },
]
</script>

<template>
  <el-card :body-style="{ padding: '0 20px' }">
    <el-collapse model-value="1">
      <el-collapse-item name="1">
        <template #title>
          <el-button text icon="el-icon-promotion">
            发起审批
          </el-button>
        </template>
        <div class="flow-list">
          <div v-for="item in flowList" :key="item.flowKey" class="flow-item" @click="openFlow(item)">
            <v-icon class="flow-icon" :icon="item.flowIcon" width="60" />
            <div class="flow-name">
              {{ item.flowName }}
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
  <el-divider direction="horizontal" content-position="left" />

  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <avue-radio v-model="searchForm.status" button :dic="flowStatusDic" @update:model-value="getDataList" />
    </template>
    <template #processTitle="{ row }">
      <el-link type="primary" :underline="false" @click="openFlow(row)">
        {{ row.processTitle || "无标题" }}
      </el-link>
    </template>
  </avue-crud>
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
