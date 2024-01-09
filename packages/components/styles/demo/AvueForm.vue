<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

const option = reactive({
  disabled: false,
  detail: false,
  menuBtn: true,
  group: [
    {
      label: '基础信息',
      column: [
        { label: '姓名', prop: 'name' },
      ],
    },
    {
      label: '其它',
      column: [
        { label: '年龄', prop: 'age', type: 'number' },
        {
          label: '性别',
          prop: 'sex',
          type: 'select',
          dicData: [
            { label: '男', value: '1' },
            { label: '女', value: '0' },
          ],
        },
      ],
    },
  ],
})
const data = ref({ name: '张三', age: 18, sex: '1' })

watch(() => option.detail, (val) => {
  option.menuBtn = !val
})
</script>

<template>
  <el-checkbox v-model="option.disabled">
    禁用
  </el-checkbox>
  <el-checkbox v-model="option.detail">
    详情
  </el-checkbox>

  <ClientOnly>
    <avue-form v-model="data" :option="option" />
  </ClientOnly>
</template>
