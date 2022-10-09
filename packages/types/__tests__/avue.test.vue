<template>
  <avue-crud :option="crudOption">
    <template #menu></template>
  </avue-crud>
  <avue-form :option="formOption">
    <template #menu-form></template>
  </avue-form>
  <avue-tree :option="treeOption">
    <template #default></template>
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

interface User {
  userName: string;
  nickName: string;
}

const crudOption: AvueCrudOption<User> = {
  column: [
    { label: "用户名", prop: "userName" },
    { label: "姓名", prop: "nickName" }
  ]
};
const formOption: AvueFormOption<User> = {
  column: [
    { label: "用户名", prop: "userName" },
    { label: "姓名", prop: "nickName" }
  ]
};
const treeOption: AvueTreeOption<User> = {
  formOption: {
    column: [
      { label: "用户名", prop: "userName" },
      { label: "姓名", prop: "nickName" }
    ]
  }
};

const crudDefaults: AvueCrudDefaults<User> = {};
crudDefaults.nickName!.prop = "nickName";
const formDefaults: AvueFormDefaults<User> = {};
formDefaults.nickName!.prop = "nickName";
</script>
