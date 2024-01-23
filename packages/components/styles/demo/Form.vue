<script setup lang="ts">
import type { FormInstance } from 'element-plus'

import { ref } from 'vue'

const disabled = ref(false)

const form = ref({ })

const options = [{ label: '1', value: '1' }, { label: '2', value: '2' }]
const formItems = [
  { prop: 'cascader', component: 'el-cascader', props: { options } },
  { prop: 'cascadermultiple', component: 'el-cascader', props: { props: { multiple: true }, options } },
  { prop: 'date', component: 'el-date-picker' },
  { prop: 'daterange', component: 'el-date-picker', props: { type: 'daterange' } },
  { prop: 'input', component: 'el-input' },
  { prop: 'number', component: 'el-input-number' },
  { prop: 'select', component: 'el-select', props: { options } },
  { prop: 'selectmultiple', component: 'el-select', props: { multiple: true, options } },
  { prop: 'switch', component: 'el-switch' },
  { prop: 'time', component: 'el-time-picker' },
  { prop: 'timerange', component: 'el-time-picker', props: { isRange: true } },
]
const rules = Object.fromEntries(formItems.map(item => [item.prop, [{ required: true }]]))

const size = ref('default' as const)
const sizes = ['large', 'default', 'small']

const labelPosition = ref('right' as const)
const positions = ['left', 'right', 'top']

const formRef = ref<FormInstance>()
function onSubmit() {
  formRef.value?.validate()
}
function onReset() {
  formRef.value?.resetFields()
}
</script>

<template>
  <el-space>
    <el-checkbox v-model="disabled">
      Form disabled
    </el-checkbox>
    <el-radio-group v-model="size">
      <el-radio-button v-for="item in sizes" :key="item" :label="item" />
    </el-radio-group>
    <el-radio-group v-model="labelPosition">
      <el-radio-button v-for="item in positions" :key="item" :label="item" />
    </el-radio-group>
  </el-space>
  <br>
  <br>

  <el-form
    ref="formRef" :model="form" :rules="rules" :disabled="disabled" :size="size" :label-position="labelPosition"
    label-width="100px"
  >
    <el-form-item v-for="item in formItems" :key="item.prop" :label="item.prop" :prop="item.prop" required>
      <component :is="item.component" v-model="form[item.prop as keyof typeof form]" v-bind="item.props">
        <template v-if="item.component === 'el-select'">
          <el-option v-for="option in item.props?.options" :key="option.value" :label="option.label" :value="option.value" />
        </template>
      </component>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        Submit
      </el-button>
      <el-button @click="onReset">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
