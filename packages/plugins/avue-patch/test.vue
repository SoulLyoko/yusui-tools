<script setup lang="ts">
import type { AvueCrudOption } from '@smallwei/avue'

import { defineComponent, h, ref } from 'vue'

const data = ref([{
  valueFromRow: 'valueFromRow',
}])

// 菜单按钮的颜色不全是primary
const option: AvueCrudOption = {
  viewBtn: true,
  labelWidth: 'auto',
  menuType: 'button',
  menuWidth: 320,
  column: [{
    label: 'valueFromRow',
    prop: 'valueFromRow',
    component: defineComponent({
      props: ['tableData'],
      setup(props) {
        console.log(props)
      },
      render() {
        // 显示tableData.row中的值
        return h('div', this.tableData.row.valueFromRow)
      },
    }),
  }],
}
</script>

<template>
  <avue-crud :data="data" :option="option" />
</template>
