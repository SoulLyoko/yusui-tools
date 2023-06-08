import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowFormProperty from '../components/flow-form-property.vue'

export const formPropertyColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'formProperty',
    component: FlowFormProperty,
    type: 'dynamic',
    // children: {
    //   addBtn: false,
    //   delBtn: false,
    //   rowKey: "prop",
    //   column: [
    //     { prop: "_index", hide: true },
    //     { label: "字段", prop: "label", component: FlowText },
    //     { label: "属性", prop: "prop", component: FlowText },
    //     { label: "显示", prop: "display", width: 40, component: FlowCheckbox },
    //     { label: "禁用", prop: "disabled", width: 40, component: FlowCheckbox },
    //     { label: "详情", prop: "detail", width: 40, component: FlowCheckbox },
    //     { label: "只读", prop: "readonly", width: 40, component: FlowCheckbox },
    //     { label: "必填", prop: "required", width: 40, component: FlowCheckbox }
    //   ]
    // },
    value: [],
  },
]
