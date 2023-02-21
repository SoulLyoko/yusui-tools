<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" icon="el-icon-arrow-left" @click="$emit('back')">返回</el-button>
    </template>
    <template #menu="{ row }">
      <el-button :loading="loading" type="text" @click="handleOpenEdit(row)"> 编辑 </el-button>
      <el-button :loading="loading" :disabled="row.mainVersion === 1" type="text" @click="handleSetMain(row)">
        设为主版本
      </el-button>
    </template>
  </avue-crud>
  <DesignSteps v-model="formData" v-model:visible="designVisible" @close="getDataList()"></DesignSteps>
</template>

<script setup lang="ts">
import type { FlowDeploy } from "../api/flow-deploy";

import { ref, watchEffect } from "vue";
import { ElMessage } from "element-plus";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import DesignSteps from "../components/design-steps/index.vue";
import { getList, update } from "../api/flow-deploy";

const props = defineProps<{ flowModuleId?: string }>();

const crudOption = {
  rowKey: "flowDeloyId",
  getList
  // remove
};
const {
  bindVal,
  crudStateRefs: { formData, searchForm },
  getDataList
} = useCrud({
  crudOption,
  tableOption
});

watchEffect(() => {
  if (!props.flowModuleId) return;
  searchForm.value.flowModuleId = props.flowModuleId;
  getDataList();
});

const loading = ref(false);
const designVisible = ref(false);
function handleSetMain(row: FlowDeploy) {
  loading.value = true;
  update({
    flowDeployId: row.flowDeployId,
    flowModuleId: row.flowModuleId,
    mainVersion: 1
  })
    .then(() => {
      ElMessage.success("设置成功");
      getDataList();
    })
    .finally(() => {
      loading.value = false;
    });
}
function handleOpenEdit(row: FlowDeploy) {
  formData.value = row;
  designVisible.value = true;
}
</script>
