<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <CategoryTree @node-click="nodeClick"></CategoryTree>
    </el-col>
    <el-col :span="20">
      <FlowDefinitionCrud
        v-if="showType === 'definition'"
        :groupId="currentGroupId"
        @add="handleAdd"
        @edit="handleEdit"
        @view="handleView"
        @version="handleShowDeploy"
      ></FlowDefinitionCrud>
      <FlowDeployCrud
        v-if="showType === 'deploy'"
        :flowModuleId="currentFlowModuleId"
        @edit="handleEdit"
        @view="handleView"
        @back="handleBack"
      ></FlowDeployCrud>
      <DesignSteps v-model="currentFlow" v-model:visible="designVisible" @close="handleClose"></DesignSteps>
      <DesignView v-model="currentFlow" v-model:visible="viewVisible"></DesignView>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import type { FlowCategory } from "../components/category-tree/option";
import type { FlowDefinition } from "../api/flow-definition";
import type { FlowDeploy } from "../api/flow-deploy";

import { ref, nextTick } from "vue";

import CategoryTree from "../components/category-tree/index.vue";
import DesignSteps from "../components/design-steps/index.vue";
import DesignView from "../components/design-view/index.vue";
import FlowDefinitionCrud from "../flow-definition/index.vue";
import FlowDeployCrud from "../flow-deploy/index.vue";

const showType = ref("definition");
const currentFlow = ref<FlowDefinition | FlowDeploy>({});
const currentGroupId = ref("");
const currentFlowModuleId = ref("");

function nodeClick(data: FlowCategory) {
  if (currentGroupId.value === data.id) {
    currentGroupId.value = "";
  } else {
    currentGroupId.value = data.id!;
  }
}

const designVisible = ref(false);
const viewVisible = ref(false);
function handleAdd() {
  currentFlow.value = {};
  designVisible.value = true;
}
function handleEdit(row: FlowDefinition | FlowDeploy) {
  currentFlow.value = row;
  designVisible.value = true;
}
function handleView(row: FlowDefinition | FlowDeploy) {
  currentFlow.value = row;
  viewVisible.value = true;
}

function handleShowDeploy(row: FlowDefinition) {
  currentFlowModuleId.value = row.flowModuleId || "";
  showType.value = "deploy";
}
function handleBack() {
  currentFlowModuleId.value = "";
  showType.value = "definition";
}

async function handleClose() {
  const oldShowType = showType.value;
  await nextTick();
  showType.value = "";
  await nextTick();
  showType.value = oldShowType + "";
}
</script>
