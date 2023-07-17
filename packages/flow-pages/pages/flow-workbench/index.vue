<script setup lang="ts">
import type { FlowCirculate, FlowDeploy, FlowTask } from '../../api'

import { computed, ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { useCrud } from '@yusui/composables'

import { TaskStatus, useFlowCategoryApi, useFlowCirculateApi, useFlowTaskApi } from '../../api'
import { useFlowForm } from '../../composables'
import { tableOption } from './option'

const { useList: useCategoryList } = useFlowCategoryApi()
const { usePublishList, getTaskList } = useFlowTaskApi()
const { getCirculateList } = useFlowCirculateApi()

const { data: categoryList } = useCategoryList()
const { data: publishList } = usePublishList()
const flowList = computed(() => {
  return categoryList.value?.map((category) => {
    const list = publishList.value?.filter(publish => publish.categoryId === category.id) ?? []
    return { ...category, list }
  }).filter(e => e.list?.length)
})

const flowStatusDic = [
  { label: '待办', value: 2 },
  { label: '已办', value: 1 },
]

const {
  bindVal,
  getDataList,
  crudStateRefs: { searchForm, crudOption },
} = useCrud({
  tableOption,
  crudOption: {
    getList: getTaskList,
  },
  searchForm: { status: 2 },
})

watchDebounced(searchForm, getDataList, { debounce: 300, immediate: true, deep: true })

const activeTab = ref('task')
const tabs = [
  { label: '任务', name: 'task', getList: getTaskList },
  { label: '传阅', name: 'circulate', getList: getCirculateList },
]
function onTabClick({ paneName }: any) {
  const findTab = tabs.find(tab => tab.name === paneName)
  crudOption.value.getList = findTab!.getList
  getDataList()
}

const { open, close } = useFlowForm()
function openFlow(row: FlowDeploy | FlowTask | FlowCirculate) {
  open({
    flowKey: (row as FlowDeploy).flowKey,
    taskId: (row as FlowTask).taskId,
    instanceId: (row as FlowTask).flowInstanceId,
    circulateId: (row as FlowCirculate).id,
    detail: (row as FlowTask).taskId ? row.status === TaskStatus['已办'] : false,
    onComplete() {
      close()
      getDataList()
    },
  })
}
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
          <div v-for="category in flowList" :key="category.id" class="flow-category">
            <el-divider content-position="left">
              {{ category.name }}
            </el-divider>
            <div v-for="item in category.list" :key="item.flowKey" class="flow-item" @click="openFlow(item)">
              <Icon class="flow-icon" :icon="item.flowIcon!" width="60" />
              <div class="flow-name">
                {{ item.flowName }}
              </div>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
  <el-divider direction="horizontal" content-position="left" />

  <el-tabs v-model="activeTab" @tab-click="onTabClick">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" />
  </el-tabs>

  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <avue-radio v-model="searchForm.status" button :dic="flowStatusDic" />
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
