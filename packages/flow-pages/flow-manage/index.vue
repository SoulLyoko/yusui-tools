<template>
  <!-- <el-row :gutter="20">
    <el-col :span="4">
      <CategoryTree @node-click="nodeClick"></CategoryTree>
    </el-col>
    <el-col :span="24">
      <avue-crud v-bind="bindVal">
        <template #formDesign-form>
          <FormDesign v-model="formData.formOption" style="height: calc(100vh - 232px)"></FormDesign>
        </template>
        <template #flowDesign-form>
          <FlowDesign v-model="formData.flowData" style="height: calc(100vh - 232px)"></FlowDesign>
        </template>
      </avue-crud>
    </el-col>
  </el-row> -->
  <FlowDeploy v-if="deployVisible" :flowModuleId="formData.flowModuleId" @back="handleBack"></FlowDeploy>
  <avue-crud v-else v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" icon="el-icon-plus" @click="handleOpenAdd">新增</el-button>
    </template>
    <template #menu="{ row }">
      <el-button :loading="loading" type="primary" icon="el-icon-edit" @click="handleOpenEdit(row)">编辑</el-button>
      <el-button :loading="loading" type="primary" icon="el-icon-download" @click="handleDeploy(row)">部署</el-button>
      <el-button :loading="loading" type="primary" icon="el-icon-upload2" @click="handleShowDeploy(row)">
        版本管理
      </el-button>
    </template>
  </avue-crud>
  <DesignSteps v-model="formData" v-model:visible="designVisible" @close="getDataList()"></DesignSteps>
</template>

<script setup lang="ts">
import type { FlowCategory } from "../components/category-tree/option";
import type { FlowDefinition } from "../api/flow-definition";

import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import CategoryTree from "../components/category-tree/index.vue";
import DesignSteps from "../components/design-steps/index.vue";
import FlowDeploy from "../flow-deploy/index.vue";
import { getList, deploy } from "../api/flow-definition";

const crudOption = {
  rowKey: "flowModuleId",
  getList
  // remove
};
const {
  bindVal,
  crudStateRefs: { formData, searchForm },
  getDataList,
  afterOpen
} = useCrud({
  crudOption,
  tableOption,
  searchForm: { groupId: "" }
});
getDataList();
afterOpen(type => {
  if (type === "add") {
    formData.value.groupId = searchForm.value.groupId ?? "";
  }
});

function nodeClick(data: FlowCategory) {
  searchForm.value.groupId = data.id!;
  getDataList();
}

const loading = ref(false);
const designVisible = ref(false);
function handleOpenAdd() {
  formData.value = {};
  designVisible.value = true;
}
function handleOpenEdit(row: FlowDefinition) {
  formData.value = row;
  designVisible.value = true;
}

function handleDeploy(row: FlowDefinition) {
  loading.value = true;
  deploy({ flowModuleId: row.flowModuleId })
    .then(() => {
      ElMessage.success("部署成功");
      getDataList();
    })
    .finally(() => {
      loading.value = false;
    });
}

const deployVisible = ref(false);
function handleShowDeploy(row: FlowDefinition) {
  formData.value = row;
  deployVisible.value = true;
}
function handleBack() {
  formData.value = {};
  deployVisible.value = false;
}
</script>
