<template>
  <avue-crud class="hide_menu" :data="tableData" :option="tableOption">
    <template #display="{ row }">
      <el-checkbox v-model="row.display"></el-checkbox>
    </template>
    <template #readonly="{ row }">
      <el-checkbox v-model="row.readonly"></el-checkbox>
    </template>
    <template #disabled="{ row }">
      <el-checkbox v-model="row.disabled"></el-checkbox>
    </template>
    <template #detail="{ row }">
      <el-checkbox v-model="row.detail"></el-checkbox>
    </template>
    <template #required="{ row }">
      <el-checkbox v-model="row.required"></el-checkbox>
    </template>
  </avue-crud>
</template>

<script setup lang="ts">
import { useVModels } from "@vueuse/core";

const props = defineProps<{
  modelValue: any[];
}>();
const { modelValue: tableData } = useVModels(props);

const tableOption = {
  rowKey: "prop",
  menu: false,
  defaultExpandAll: true,
  column: [
    { label: "字段", prop: "label", cell: true },
    { label: "属性", prop: "prop", cell: true },
    { label: "显示", prop: "display", width: 40, cell: true },
    { label: "禁用", prop: "disabled", width: 40, cell: true },
    { label: "详情", prop: "detail", width: 40, cell: true },
    { label: "只读", prop: "readonly", width: 40, cell: true },
    { label: "必填", prop: "required", width: 40, cell: true }
  ]
};
</script>
