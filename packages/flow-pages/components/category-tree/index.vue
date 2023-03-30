<template>
  <avue-tree
    v-model="formData"
    :option="treeOption"
    :data="tableData"
    @node-click="emit('node-click', $event)"
    @save="handleTreeSave"
    @update="handleTreeUpdate"
    @del="handleTreeDel"
  ></avue-tree>
</template>

<script setup lang="ts">
import { useCrud } from "@yusui/composables";

import { getList, create, update, remove } from "../../api/flow-category";
import { treeOption } from "./option";

const emit = defineEmits(["node-click"]);

const crudOption = {
  rowKey: "id",
  getList,
  create,
  update,
  remove,
  dataPath: "res.data"
};
const {
  crudStateRefs: { formData, tableData },
  getDataList,
  handleSave,
  handleUpdate,
  handleDel
} = useCrud({
  crudOption,
  tableOption: treeOption,
  pageOption: { pageSize: 20 },
  mockCache: "flow-category"
});
getDataList();

function handleTreeSave(parent: any, data: any, done: () => void, loading: () => void) {
  handleSave(data, done, loading);
}
function handleTreeUpdate(parent: any, data: any, done: () => void, loading: () => void) {
  handleUpdate(data, NaN, done, loading);
}
function handleTreeDel(row: any) {
  handleDel(row, NaN);
}
</script>
