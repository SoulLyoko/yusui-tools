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
  name?: string
}

const data = ref<User[]>([{ name: 'admin' }])
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
    label: '名称',
    prop: 'name',
    labelWidth: 400,
    search: true,
    searchLabelWidth: 300,
    searchSpan: 24,
    span: 24,
    dicData: [{ label: '管理员', value: 'admin' }],
    rules: [{ required: true }],
  }],
}
const crudRef = ref<AvueCrudInstance<User>>()
crudRef.value?.dicInit()
const crudDefaults = ref<AvueCrudDefaults<User>>()
watchEffect(() => {
  if (!crudDefaults.value)
    return
  crudDefaults.value.name.prop = 'name'
})

const form = ref<User>({ name: 'admin' })
const formOption: AvueFormOption<User> = {
  column: [{
    label: '名称',
    prop: 'name',
    labelWidth: 300,
    span: 24,
    dicData: [{ label: '管理员', value: 'admin' }],
    rules: [{ required: true }],
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

const tree = ref<User[]>([{ name: 'admin' }])
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
  crudDefaults: {{ crudDefaults }}
  <avue-crud ref="crudRef" v-model:defaults="crudDefaults" :data="data" :option="crudOption">
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
      #name: {{ props.row.$name }}
    </template>
    <template #menu="props">
      #menu {{ props }}
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
  formData: {{ form }}
  formDefaults: {{ formDefaults }}
  <avue-form ref="formRef" v-model="form" v-model:defaults="formDefaults" :option="formOption">
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
  <avue-tree :data="tree" :option="treeOption">
    <template #menu="props">
      {{ props?.node.data }}
    </template>
    <template #default="props">
      {{ props?.data }}
    </template>
  </avue-tree>
</template>
