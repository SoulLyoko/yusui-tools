<script setup lang="ts">
import type { FlowOps } from '@yusui/flow-pages'

import { computed } from 'vue'
import { ElMessage } from 'element-plus'
import { watchDebounced } from '@vueuse/core'
import { useCrud } from '@yusui/composables'
import { TaskStatus, useConfigProvider, useFlowCategoryApi, useFlowForm, useFlowTaskApi } from '@yusui/flow-pages'
import { enumToDic } from '@yusui/utils'

import { tableOption } from './option'

const { request } = useConfigProvider()
const { useList: useCategoryList } = useFlowCategoryApi(request)
const { usePublishList, getTaskList } = useFlowTaskApi(request)

const { data: categoryList } = useCategoryList()
const { data: publishList } = usePublishList()
const flowList = computed(() => {
  return categoryList.value?.map((category) => {
    const list = publishList.value?.filter(publish => publish.categoryId === category.id) ?? []
    return { ...category, list }
  }).filter(e => e.list?.length)
})

const flowStatusDic = enumToDic(TaskStatus).filter((e, i) => i < 2).reverse()

const {
  bindVal,
  getDataList,
  crudStateRefs: { searchForm },
} = useCrud({
  tableOption,
  crudOption: {
    getList: getTaskList,
  },
  searchForm: { status: TaskStatus['待办'] },
})

watchDebounced(searchForm, getDataList, { debounce: 300, immediate: true, deep: true })

const { open, close } = useFlowForm()
function openFlow(row: FlowOps) {
  open({
    flowKey: (row as FlowOps).flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    detail: row.taskId ? row.status === TaskStatus['已办'] : false,
    onComplete() {
      close()
      ElMessage.success('操作成功')
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
