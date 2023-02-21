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

  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" icon="el-icon-plus" @click="handleOpenAdd">新增</el-button>
    </template>
    <template #menu="{ row }">
      <el-button :loading="loading" type="primary" icon="el-icon-edit" @click="handleOpenEdit(row)">编辑</el-button>
      <el-button :loading="loading" type="primary" icon="el-icon-download" @click="handleDeploy(row)">部署</el-button>
    </template>
  </avue-crud>
  <DesignDialog v-model="formData" v-model:visible="dialogVisible" @close="getDataList()"></DesignDialog>
</template>

<script setup lang="ts">
import type { FlowCategory } from "../components/category-tree/option";
import type { FlowDefinition } from "../api/flow-definition";

import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import CategoryTree from "../components/category-tree/index.vue";
import DesignDialog from "./design-dialog.vue";
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
const dialogVisible = ref(false);
function handleOpenAdd() {
  formData.value = {};
  dialogVisible.value = true;
}
function handleOpenEdit(row: FlowDefinition) {
  formData.value = row;
  dialogVisible.value = true;
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
</script>
