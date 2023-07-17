<script setup lang="ts">
import type { AvueFormInstance, AvueFormOption } from '@smallwei/avue'

import { ref } from 'vue'
import { asyncValidate, useInjectState } from '@yusui/flow-pages'

const { formData, beforeClick, beforeSubmit } = useInjectState()
const formRef = ref<AvueFormInstance>()
const formOption: AvueFormOption = {
  menuBtn: false,
  span: 24,
  column: [
    { prop: 'title', type: 'title', value: '这是一个自定义表单' },
    { label: '输入框', prop: 'input', placeholder: '请输入值', rules: [{ required: true, message: '请输入值' }] },
  ],
}

beforeClick!.value = (activeBtn) => {
  if (activeBtn.buttonKey === 'flow_pass')
    console.log('正在选择审批人')
}
beforeSubmit!.value = (activeBtn) => {
  if (activeBtn.buttonKey === 'flow_pass')
    console.log('正在提交')
}

const validate = () => asyncValidate(formRef)
defineExpose({ validate })
</script>

<template>
  <avue-form ref="formRef" v-model="formData" :option="formOption" />
</template>
