<script setup lang="ts">
import type { AvueCrudOption, AvueFormOption } from '@smallwei/avue'

import { defineComponent, h, ref } from 'vue'

const option1: AvueCrudOption = {
  title: '菜单按钮的颜色不全是primary',
  viewBtn: true,
  menuType: 'button',
  menuWidth: 320,
}

const option2: AvueCrudOption = {
  title: '菜单按钮插槽正常显示',
  viewBtn: true,
  menuType: 'menu',
}

const data = ref([{
  valueFromRow: '显示tableData.row中的值',
}])
const option3: AvueCrudOption = {
  title: '给表单项传递表单数据',
  labelWidth: 'auto',
  delBtn: false,
  column: [{
    label: 'valueFromRow',
    prop: 'valueFromRow',
    component: defineComponent({
      props: ['tableData'],
      setup(props) {
        console.log(props)
      },
      render() {
        return h('div', this.tableData.row.valueFromRow)
      },
    }),
  }],
}

const formRef = ref()
const formData = ref({})
const option4: AvueFormOption = {
  tabs: true,
  column: [{
    prop: 'title',
    labelWidth: 0,
    type: 'title',
    span: 24,
    value: '表单分组的control不再导致增加空分组',
    styles: { fontSize: '24px' },
  }],
  group: [
    {
      label: '分组1',
      column: [
        {
          label: '属性1',
          prop: 'test1',
          type: 'select',
          dicData: [{ label: '显示属性2', value: true }, { label: '隐藏属性2', value: false }],
          control(val) {
            return {
              test2: { display: val },
            }
          },
        },
      ],
    },
    {
      label: '分组2',
      column: [
        { label: '属性2', prop: 'test2' },
      ],
    },
  ],
}
</script>

<template>
  <avue-crud class="hide-menu" :data="data" :option="option1" />

  <avue-crud class="hide-menu" :data="data" :option="option2">
    <template #menu-btn>
      <el-dropdown-item icon="el-icon-warning">
        自定义按钮
      </el-dropdown-item>
    </template>
  </avue-crud>

  <avue-crud class="hide-menu" :data="data" :option="option3" />

  <avue-form ref="formRef" v-model="formData" :option="option4" />
</template>
