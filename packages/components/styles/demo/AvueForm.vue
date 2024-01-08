<script setup lang="ts">
import { ref, watch } from 'vue'

const option = ref({
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
const data = { name: '张三', age: 18, sex: '1' }

watch(() => option.value.detail, (val) => {
  option.value.menuBtn = !val
})
</script>

<template>
  <el-checkbox v-model="option.disabled">
    禁用
  </el-checkbox>
  <el-checkbox v-model="option.detail">
    详情
  </el-checkbox>

  <avue-form v-model="data" :option="option" />
</template>
