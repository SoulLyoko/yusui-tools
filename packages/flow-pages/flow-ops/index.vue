<template>
  <avue-crud v-bind="bindVal">
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
  ></FlowForm>
</template>

<script setup lang="ts">
import type { FlowOps } from "../api/flow-ops";

import { ref } from "vue";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import { getFlowList } from "../api/flow-ops";
import FlowForm from "../flow-form/index.vue";

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
