<template>
  <avue-crud v-bind="bindVal"></avue-crud>
</template>

<script setup lang="ts">
import { useCrud } from "@yusui/composables";

import { tableOption } from "./option";
import { getList, create, update, remove } from "../api/flow-param";

const { bindVal, getDataList } = useCrud({
  crudOption: {
    rowKey: "id",
    getList,
    create,
    update,
    remove
  },
  tableOption
});
getDataList();
</script>
