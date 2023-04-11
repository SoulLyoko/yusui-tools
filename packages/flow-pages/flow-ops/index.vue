<template>
  <avue-crud v-bind="bindVal">
    <template #menu-right>
      <el-button type="text">
        <el-switch v-model="debugMode" inline-prompt active-text="debug" inactive-text="debug" />
      </el-button>
    </template>
    <template #processTitle="{ row }">
      <el-link type="primary" :underline="false" @click="openFlowForm(row)">
        {{ row.processTitle || "无标题" }}
      </el-link>
    </template>
  </avue-crud>
  <FlowForm
    v-model:visible="flowFormVisible"
    :taskId="formData.taskId"
    :instanceId="formData.flowInstanceId"
    :debug="debugMode"
  ></FlowForm>
</template>

<script setup lang="ts">
import type { FlowOps } from "../api/flow-ops";

import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import { getFlowList } from "../api/flow-ops";
import FlowForm from "../flow-form/index.vue";

const debugMode = useStorage("debugMode", false);

const crudOption = {
  rowKey: "id",
  getList: getFlowList
};
const {
  bindVal,
  crudStateRefs: { formData },
  getDataList
} = useCrud({ crudOption, tableOption });
getDataList();

const flowFormVisible = ref(false);
async function openFlowForm(row: FlowOps) {
  formData.value = row;
  flowFormVisible.value = true;
}
</script>
