<script setup lang="ts">
import type { UvueFormDefaults, UvueFormOption, UvueListOption } from 'uvue-crud'

import { reactive, ref } from 'vue'
import { UvueForm, UvueList } from 'uvue-crud'

import { useCrud } from '.'

interface User {
  userName: string
  nickName: string
  dept: {
    deptId: string
    deptName: string
  }
}

const listOption: UvueListOption<User> = reactive({
  formatter(row) {
    return row
  },
})
const formOption: UvueFormOption<User> = {
  column: [
    { label: '用户名', prop: 'userName' },
    { label: '姓名', prop: 'nickName' },
  ],
}

const formDefaults = ref<UvueFormDefaults>({})
formDefaults.value.nickName!.prop = 'nickName'

const { bindList } = useCrud({ listOption })
const { bindForm } = useCrud({ formOption })
</script>

<template>
  <UvueList v-bind="bindList" />
  <UvueForm v-bind="bindForm" v-model:defaults="formDefaults" />
</template>
