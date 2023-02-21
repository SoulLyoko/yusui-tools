<template>
  <avue-crud v-bind="bindVal">
    <template #source="{ row }">
      <el-button type="primary" text icon="el-icon-crop" @click="openDesign(row)">设计</el-button>
    </template>
  </avue-crud>
  <el-dialog v-model="dialogVisible" :title="`表单设计-${formData.name}`" fullscreen destroy-on-close>
    <FormDesign v-model="formData.source" style="height: calc(100vh - 177px)"></FormDesign>
    <template #footer>
      <el-button type="primary" @click="handleSaveLayout">保存</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FormTemplate } from "./option";

import { ref } from "vue";
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import FormDesign from "../components/form-design/index.vue";

const crudOption = {
  rowKey: "id"
  // getList,
  // create,
  // update,
  // remove
};
const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  handleUpdate
} = useCrud({ crudOption, tableOption, mockCache: "form-template" });
getDataList();

const dialogVisible = ref(false);
async function openDesign(row: FormTemplate) {
  formData.value = { ...row };
  dialogVisible.value = true;
}

async function handleSaveLayout() {
  await handleUpdate(
    formData.value,
    NaN,
    () => (dialogVisible.value = false),
    () => {}
  );
}
</script>
