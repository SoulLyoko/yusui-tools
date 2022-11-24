<template>
  <avue-crud v-model:defaults="crudDefaults" :option="crudOption">
    <template #menu></template>
    <template #test-form="{ value }">
      {{ value }}
    </template>
  </avue-crud>
  <avue-form v-model:defaults="formDefaults" :option="formOption">
    <template #menu-form></template>
    <template #test="{ value }">
      {{ value }}
    </template>
  </avue-form>
  <avue-tree :option="treeOption">
    <template #default="{ node, data }">
      {{ node }}
      {{ data }}
    </template>
  </avue-tree>
</template>

<script setup lang="ts">
import type {
  AvueCrudOption,
  AvueFormOption,
  AvueTreeOption,
  AvueCrudDefaults,
  AvueFormDefaults
} from "@smallwei/avue";

import { ref, reactive } from "vue";

interface User {
  userName: string;
  nickName: string;
  dept: {
    deptId: string;
    deptName: string;
  };
}

const crudOption: AvueCrudOption<User> = reactive({
  column: [
    { label: "用户名", prop: "userName" },
    { label: "姓名", prop: "nickName" },
    {
      label: "其它",
      prop: "dept",
      children: {
        column: [
          { label: "部门id", prop: "deptId" },
          { label: "部门名称", prop: "deptName" }
        ]
      }
    }
  ]
});
const formOption: AvueFormOption<User> = {
  column: [
    { label: "用户名", prop: "userName" },
    { label: "姓名", prop: "nickName" }
  ]
};
const treeOption: AvueTreeOption<User> = {
  formOption
};

const crudDefaults = ref<AvueCrudDefaults>({});
crudDefaults.value.nickName!.prop = "nickName";
const formDefaults = ref<AvueFormDefaults>({});
formDefaults.value.nickName!.prop = "nickName";
</script>
