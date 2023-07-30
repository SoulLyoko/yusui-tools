<script setup lang="ts">
import type { AvueFormInstance, AvueFormOption } from '@smallwei/avue'

import { ref } from 'vue'
import { asyncValidate, useFormDefaults, useInjectState } from '@yusui/flow-pages'

// 获取流程表单上下文数据
const { flowDetail, formData, beforeClick, beforeSubmit } = useInjectState()

const formRef = ref<AvueFormInstance>()
const formOption: AvueFormOption = {
  menuBtn: false,
  span: 24,
  column: [
    { prop: 'title', type: 'title', value: '这是一个自定义表单' },
    { label: '输入框', prop: 'input', placeholder: '请输入值', rules: [{ required: true, message: '请输入值' }] },
  ],
}

// 可以使用FlowForm内置的表单控制，或自行定义
const formDefaults = useFormDefaults(flowDetail)

// 按钮点击的钩子，返回Promise.reject()可以阻止点击
beforeClick!.value = (activeBtn) => {
  if (activeBtn.buttonKey === 'flow_pass')
    console.log('正在选择审批人')
}
// 提交前的钩子，返回Promise.reject()可以阻止提交
beforeSubmit!.value = (activeBtn) => {
  if (activeBtn.buttonKey === 'flow_pass')
    console.log('正在提交')
}

// 暴露异步validate方法作为提交前的校验
const validate = () => asyncValidate(formRef)
defineExpose({ validate })
</script>

<script lang="ts">
export default { name: 'TestForm' }
</script>

<template>
  <avue-form ref="formRef" v-model="formData" v-model:defaults="formDefaults" :option="formOption" />
</template>
