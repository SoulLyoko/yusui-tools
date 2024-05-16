<script setup lang="ts">
import type {
  AvueCrudDefaults,
  AvueCrudInstance,
  AvueCrudOption,
  AvueFormDefaults,
  AvueFormInstance,
  AvueFormOption,
  AvueTreeInstance,
  AvueTreeOption,
} from '@smallwei/avue'

import { $DialogForm } from '@smallwei/avue'
import { ref, watchEffect } from 'vue'

interface User {
  name?: string
}

const tableData = ref<User[]>([{ name: 'admin' }])
const tableOption: AvueCrudOption<User> = {
  searchBtn: false,
  emptyBtn: false,
  refreshBtn: false,
  columnBtn: false,
  searchShowBtn: false,
  gridBtn: false,
  menuType: 'menu',
  column: [
    {
      label: '名称',
      prop: 'name',
      labelWidth: 400,
      search: true,
      searchLabelWidth: 300,
      searchSpan: 24,
      span: 24,
      dicData: [{ label: '管理员', value: 'admin' }],
      rules: [{ required: true }],
      formatter(row) {
        return row.name
      },
    },
    {
      label: '不存在的字段',
      // @ts-expect-error
      prop: 'notExist',
    },
  ],
}
const crudRef = ref<AvueCrudInstance<User>>()
crudRef.value?.dicInit()
const crudDefaults = ref<AvueCrudDefaults<User>>()
watchEffect(() => {
  if (!crudDefaults.value)
    return
  crudDefaults.value.name.prop = 'name'
})

const formData = ref<User>({ name: 'admin' })
const formOption: AvueFormOption<User> = {
  column: [{
    label: '名称',
    prop: 'name',
    labelWidth: 300,
    span: 24,
    dicData: [{ label: '管理员', value: 'admin' }],
    rules: [{ required: true, message: '名称为必填项' }],
  }],
}
const formRef = ref<AvueFormInstance>()
formRef.value?.dicInit()
const formDefaults = ref<AvueFormDefaults<User>>()
watchEffect(() => {
  if (!formDefaults.value)
    return
  formDefaults.value.name.prop = 'name'
})

const treeRef = ref<AvueTreeInstance>()
treeRef.value?.filter('')
const treeData = ref<User[]>([{ name: 'admin' }])
const treeOption: AvueTreeOption<User> = {
  formOption: {
    column: [{
      label: '名称',
      prop: 'name',
      dicData: [{ label: '管理员', value: 'admin' }],
    }],
  },
}
</script>

<template>
  <h2>AvueCrud</h2>
  tableData: {{ tableData }}
  crudDefaults: {{ crudDefaults }}
  <avue-crud ref="crudRef" v-model:defaults="crudDefaults" :data="tableData" :option="tableOption">
    <template #search="props">
      #search: {{ props }}
    </template>
    <template #name-search="props">
      #name-search: {{ props }}
    </template>
    <template #name-search-label="props">
      #name-search-label: {{ props }}
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

    <template #name-header="props">
      #name-header: {{ props }}
    </template>
    <template #name="props">
      #name: {{ props }}
    </template>
    <template #menu="props">
      #menu {{ props }}
    </template>
    <template #menu-btn="props">
      #menu-btn {{ props }}
    </template>

    <template #name-label="props">
      #name-label: {{ props }}
    </template>
    <template #name-form="props">
      #name-form: {{ props }}
    </template>
    <template #name-error="props">
      #name-error: {{ props }}
    </template>
    <template #menu-form="props">
      #menu-form: {{ props }}
    </template>
  </avue-crud>

  <h2>AvueForm</h2>
  formData: {{ formData }}
  formDefaults: {{ formDefaults }}
  <avue-form ref="formRef" v-model="formData" v-model:defaults="formDefaults" :option="formOption">
    <template #name-label="props">
      #name-label: {{ props }}
    </template>
    <template #name="props">
      #name: {{ props }}
    </template>
    <template #name-error="props">
      #name-error: {{ props }}
    </template>
    <template #menu-form="props">
      #menu-form: {{ props }}
    </template>
  </avue-form>

  <h2>AvueTree</h2>
  <avue-tree ref="treeRef" :data="treeData" :option="treeOption">
    <template #add-btn>
      addBtn
    </template>
    <template #menu="props">
      {{ props?.node.data }}
    </template>
    <template #default="props">
      {{ props?.data }}
    </template>
  </avue-tree>

  <h2>DialogForm</h2>
  <el-button @click="$DialogForm({ title: 'DialogForm', option: formOption, callback: ({ close }) => close() })">
    open
  </el-button>
</template>
