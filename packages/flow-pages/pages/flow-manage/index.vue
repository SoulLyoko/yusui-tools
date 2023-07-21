<script setup lang="ts">
import type { FlowCategory, FlowDefinition, FlowDeploy } from '@yusui/flow-pages'

import { nextTick, ref } from 'vue'

import CategoryTree from '../../components/category-tree/index.vue'
import DesignSteps from '../../components/design-steps/index.vue'
import DesignView from '../../components/design-view/index.vue'
import FlowDefinitionCrud from '../flow-definition/index.vue'
import FlowDeployCrud from '../flow-deploy/index.vue'

const showType = ref('definition')
const currentFlow = ref<FlowDefinition | FlowDeploy>({})
const currentCategoryId = ref('')
const currentFlowModuleId = ref('')

function nodeClick(data: FlowCategory) {
  if (currentCategoryId.value === data.id)
    currentCategoryId.value = ''
  else
    currentCategoryId.value = data.id!
}

const designVisible = ref(false)
const viewVisible = ref(false)
function handleAdd() {
  currentFlow.value = {}
  designVisible.value = true
}
function handleEdit(row: FlowDefinition | FlowDeploy) {
  currentFlow.value = row
  designVisible.value = true
}
function handleView(row: FlowDefinition | FlowDeploy) {
  currentFlow.value = row
  viewVisible.value = true
}

function handleShowDeploy(row: FlowDefinition) {
  currentFlowModuleId.value = row.flowModuleId || ''
  showType.value = 'deploy'
}
function handleBack() {
  currentFlowModuleId.value = ''
  showType.value = 'definition'
}

async function handleClose() {
  const oldShowType = showType.value
  await nextTick()
  showType.value = ''
  await nextTick()
  showType.value = `${oldShowType}`
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <CategoryTree @node-click="nodeClick" />
    </el-col>
    <el-col :span="20">
      <FlowDefinitionCrud
        v-if="showType === 'definition'"
        :category-id="currentCategoryId"
        @add="handleAdd"
        @edit="handleEdit"
        @view="handleView"
        @version="handleShowDeploy"
      />
      <FlowDeployCrud
        v-if="showType === 'deploy' && currentFlowModuleId"
        :flow-module-id="currentFlowModuleId"
        @edit="handleEdit"
        @view="handleView"
        @back="handleBack"
      />
      <DesignSteps v-model="currentFlow" v-model:visible="designVisible" @close="handleClose" />
      <DesignView v-model="currentFlow" v-model:visible="viewVisible" />
    </el-col>
  </el-row>
</template>
