<template>
  <avue-crud v-bind="bindVal"></avue-crud>
</template>

<script setup lang="ts">
import { useCrud } from "@yusui/composables";
const getList = () => Promise.resolve({ data: { records: [{ name: "123" }], total: 1 } });
const create = () => Promise.resolve();
const update = () => Promise.resolve();
const remove = () => Promise.resolve();

const { bindVal, getDataList } = useCrud({
  crudOption: { getList, create, update, remove },
  tableOption: {
    column: [{ label: "名称", prop: "name" }]
  }
});
getDataList();
</script>
