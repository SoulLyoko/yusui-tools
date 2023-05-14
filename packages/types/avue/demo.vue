<script setup lang="ts">
import type {
  AvueCrudDefaults,
  AvueCrudInstance,
  AvueCrudOption,
  AvueFormDefaults,
  AvueFormInstance,
  AvueFormOption,
  AvueTreeOption,
} from '@smallwei/avue'

import { ref, watchEffect } from 'vue'

interface User {
  userName?: string
}

const data = ref<User[]>([{ userName: 'admin' }])
const crudOption: AvueCrudOption<User> = {
  searchBtn: false,
  emptyBtn: false,
  // addBtn: false,
  editBtn: false,
  delBtn: false,
  refreshBtn: false,
  columnBtn: false,
  searchShowBtn: false,
  column: [{
    label: '用户名',
    prop: 'userName',
    labelWidth: 400,
    search: true,
    searchLabelWidth: 300,
    searchSpan: 24,
    span: 24,
    dicData: [],
    rules: [{ required: true }],
  }],
}
const crudRef = ref<AvueCrudInstance<User>>()
crudRef.value?.dicInit()
const crudDefaults = ref<AvueCrudDefaults<User>>()
watchEffect(() => {
  if (!crudDefaults.value)
    return
  crudDefaults.value.userName.prop = 'userName'
})

const form = ref<User>({ userName: 'admin' })
const formOption: AvueFormOption<User> = {
  column: [{
    label: '用户名',
    prop: 'userName',
    labelWidth: 300,
    span: 24,
    dicData: [],
    rules: [{ required: true }],
  }],
}
const formRef = ref<AvueFormInstance>()
formRef.value?.dicInit()
const formDefaults = ref<AvueFormDefaults<User>>()
watchEffect(() => {
  if (!formDefaults.value)
    return
  formDefaults.value.userName.prop = 'userName'
})

const tree = ref<User[]>([{ userName: 'admin' }])
const treeOption: AvueTreeOption<User> = {
  formOption: {
    column: [{
      label: '用户名',
      prop: 'userName',
    }],
  },
}
</script>

<template>
  <h2>AvueCrud</h2>
  crudDefaults: {{ crudDefaults }}
  <avue-crud ref="crudRef" v-model:defaults="crudDefaults" :data="data" :option="crudOption">
    <template #search="props">
      #search: {{ props }}
    </template>
    <template #userName-search="props">
      #userName-search: {{ props }}
    </template>
    <template #userName-search-label="props">
      #userName-search-label: {{ props }}
    </template>
    <template #search-menu="props">
      #search-menu: {{ props }}
    </template>

    <template #menu-left="props">
      #menu-left: {{ props }}
    </template>
    <template #menu-right="props">
      #menu-right: {{ props }}
    </template>

    <template #userName-header="props">
      #userName-header: {{ props }}
    </template>
    <template #userName="props">
      #userName: {{ props }}
    </template>
    <template #menu="props">
      #menu {{ props }}
    </template>

    <template #userName-label="props">
      #userName-label: {{ props }}
    </template>
    <template #userName-form="props">
      #userName-form: {{ props }}
    </template>
    <template #userName-error="props">
      #userName-error: {{ props }}
    </template>
    <template #menu-form="props">
      #menu-form: {{ props }}
    </template>
  </avue-crud>

  <h2>AvueForm</h2>
  formDefaults: {{ formDefaults }}
  <avue-form ref="formRef" v-model="form" v-model:defaults="formDefaults" :option="formOption">
    <template #userName-label="props">
      #userName-label: {{ props }}
    </template>
    <template #userName="props">
      #userName: {{ props }}
    </template>
    <template #userName-error="props">
      #userName-error: {{ props }}
    </template>
    <template #menu-form="props">
      #menu-form: {{ props }}
    </template>
  </avue-form>

  <h2>AvueTree</h2>
  <avue-tree :data="tree" :option="treeOption">
    <template #menu="props">
      {{ props?.node.data }}
    </template>
    <template #default="props">
      {{ props?.data }}
    </template>
  </avue-tree>
</template>
