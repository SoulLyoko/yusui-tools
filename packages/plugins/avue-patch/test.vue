<script setup lang="ts">
import type { AvueCrudOption } from '@smallwei/avue'

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
</template>
