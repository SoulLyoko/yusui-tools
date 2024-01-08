<script setup lang="ts">
import { ref } from 'vue'

const option = ref({
  viewBtn: true,
  card: false,
  stripe: false,
  searchSpan: 8,
  group: [
    {
      label: '基础信息',
      column: [
        { label: '姓名', prop: 'name', search: true },
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
  column: [
    { label: '姓名', prop: 'name', search: true },
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
  ].map(e => ({ ...e, display: false })),
})
const data = [
  { name: '张三', age: 18, sex: '1' },
  { name: '李四', age: 19, sex: '0' },
  { name: '王五', age: 20, sex: '1' },
]
</script>

<template>
  <avue-crud :data="data" :option="option">
    <template #menu-left>
      <el-checkbox v-model="option.card">
        卡片
      </el-checkbox>
      <el-checkbox v-model="option.stripe">
        斑马纹
      </el-checkbox>
    </template>
  </avue-crud>
</template>
