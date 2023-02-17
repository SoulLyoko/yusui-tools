<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <CategoryTree @node-click="nodeClick"></CategoryTree>
    </el-col>
    <el-col :span="20">
      <avue-crud v-bind="bindVal">
        <template #formDesign-form>
          <FormDesign v-model="formData.formOption" style="height: calc(100vh - 232px)"></FormDesign>
        </template>
        <template #modelDesign-form>
          <ModelDesign v-model="formData.modelData" style="height: calc(100vh - 232px)"></ModelDesign>
        </template>
      </avue-crud>
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="sys-dict">
import type { FlowCategory } from "./option";

import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import CategoryTree from "./category-tree.vue";
import FormDesign from "../form-design/index.vue";
import ModelDesign from "../model-design/index.vue";

const crudOption = {
  rowKey: "id"
  // getList,
  // create,
  // update,
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
  searchForm: { categoryId: "" },
  mockCache: "flow-design"
});
getDataList();
afterOpen(type => {
  if (type === "add") {
    formData.value.categoryId = searchForm.value.categoryId ?? "";
  }
});

function nodeClick(data: FlowCategory) {
  searchForm.value.categoryId = data.id!;
  getDataList();
}
</script>
