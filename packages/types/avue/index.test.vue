<script setup lang="ts">
import type {
  AvueCrudDefaults,
  AvueCrudOption,
  AvueFormDefaults,
  AvueFormOption,
  AvueTreeOption,
} from '@smallwei/avue'

import { reactive, ref } from 'vue'

interface User {
  userName: string
  nickName: string
  dept: {
    deptId: string
    deptName: string
  }
}

const crudOption: AvueCrudOption<User> = reactive({
  column: [
    { label: '用户名', prop: 'userName' },
    { label: '姓名', prop: 'nickName' },
    {
      label: '其它',
      prop: 'dept',
      children: {
        column: [
          { label: '部门id', prop: 'deptId' },
          { label: '部门名称', prop: 'deptName' },
        ],
      },
    },
  ],
})
const formOption: AvueFormOption<User> = {
  column: [
    { label: '用户名', prop: 'userName' },
    { label: '姓名', prop: 'nickName' },
  ],
}
const treeOption: AvueTreeOption<User> = {
  formOption,
}

const crudDefaults = ref<AvueCrudDefaults>({})
crudDefaults.value.nickName!.prop = 'nickName'
const formDefaults = ref<AvueFormDefaults>({})
formDefaults.value.nickName!.prop = 'nickName'
</script>

<template>
  <avue-crud v-model:defaults="crudDefaults" :option="crudOption">
    <template #menu />
    <template #test-form="{ value }">
      {{ value }}
    </template>
  </avue-crud>
  <avue-form v-model:defaults="formDefaults" :option="formOption">
    <template #menu-form />
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
