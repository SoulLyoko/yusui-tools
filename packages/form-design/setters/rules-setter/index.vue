<script setup lang="ts">
import type { AvueFormOption } from '@smallwei/avue'
import type { FormItemRule } from 'element-plus'

import { useVModels } from '@vueuse/core'
import { filterObj } from '@yusui/utils'
import { ElButton } from 'element-plus'
import { computed, nextTick, ref } from 'vue'

import EditorSetter from '../editor-setter/index.vue'

const props = withDefaults(
  defineProps<{ modelValue?: FormItemRule[] }>(),
  { modelValue: () => [] },
)
const { modelValue: rules } = useVModels(props)

const visible = ref(false)
const currentIndex = ref(-1)
const ruleItem = computed({
  get() {
    return rules.value?.[currentIndex.value] ?? {}
  },
  set(val) {
    if (rules.value && currentIndex.value !== -1) {
      const temp = filterObj(val, [undefined, null, ''], ['$'])
      rules.value[currentIndex.value] = temp
    }
  },
})

async function handleAdd() {
  !rules.value && (rules.value = [])
  await nextTick()
  rules.value?.push({})
}
function handleEdit(data: FormItemRule, index: number) {
  currentIndex.value = index
  visible.value = true
}
function handleDel(data: FormItemRule, index: number) {
  rules.value?.splice(index, 1)
}

const whetherDic = [
  { label: '否', value: false },
  { label: '是', value: true },
]

const ruleItemOption: AvueFormOption = {
  menuBtn: false,
  span: 24,
  labelWidth: 100,
  column: [
    {
      label: '触发方式',
      prop: 'trigger',
      type: 'select',
      dicData: [
        { label: '值变化', value: 'change' },
        { label: '聚焦时', value: 'focus' },
        { label: '失焦时', value: 'blur' },
      ],
    },
    {
      label: '值类型',
      prop: 'type',
      type: 'select',
      dicData: [
        { label: '字符串', value: 'string' },
        { label: '数字', value: 'number' },
        { label: '布尔值', value: 'boolean' },
        // { label: "函数", value: "method" },
        // { label: "正则表达式", value: "regexp" },
        { label: '整数', value: 'integer' },
        { label: '浮点数', value: 'float' },
        // { label: "数组", value: "array" },
        // { label: "对象", value: "object" },
        // { label: "枚举", value: "enum" },
        { label: '日期', value: 'date' },
        { label: 'URL地址', value: 'url' },
        { label: '十六进制', value: 'hex' },
        { label: '邮箱', value: 'email' },
        // { label: "自定义正则", value: "pattern" },
        { label: '任意类型', value: 'any' },
      ],
    },
    {
      label: '是否必填',
      prop: 'required',
      type: 'radio',
      button: true,
      dicData: whetherDic,
    },
    {
      label: '错误消息',
      prop: 'message',
    },
    {
      label: '正则表达式',
      prop: 'pattern',
      prepend: '/',
      append: '/',
    },
    {
      label: '最小',
      prop: 'min',
      type: 'number',
    },
    {
      label: '最大',
      prop: 'max',
      type: 'number',
    },
    {
      label: '长度',
      prop: 'len',
      type: 'number',
    },
    // {
    //   label: "枚举",
    //   prop: "enum",
    // },
    {
      label: '禁止空白符',
      prop: 'whitespace',
      type: 'radio',
      button: true,
      dicData: whetherDic,
    },
    {
      label: '自定义校验函数',
      prop: 'validator',
      labelWidth: 120,
      component: EditorSetter,
      tooltip: true,
      width: '400px',
      defaultValue: `(rule, value, callback, source, options) => {

}`,
    },
  ],
}
</script>

<template>
  <div v-for="(item, index) in rules" :key="index">
    <ElButton icon="el-icon-setting" @click="handleEdit(item, index)">
      配置规则
    </ElButton>
    <ElButton text icon="el-icon-delete" @click="handleDel(item, index)" />
  </div>
  <ElButton icon="el-icon-plus" @click="handleAdd">
    添加规则
  </ElButton>

  <el-drawer v-model="visible" title="配置规则" append-to-body destroy-on-close>
    <avue-form v-model="ruleItem" :option="ruleItemOption" />
  </el-drawer>
</template>
