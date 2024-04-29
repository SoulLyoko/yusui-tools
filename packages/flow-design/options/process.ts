import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowDataOptions from '../components/FlowDataOptions.vue'

export const processColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'config',
    component: 'avue-form',
    option: {
      menuBtn: false,
      span: 24,
      labelWidth: 100,
      column: [
        {
          label: '流水号模板',
          prop: 'snTemplate',
          component: FlowDataOptions,
          dataKey: 'snTemplateDic',
          filterable: true,
          allowCreate: true,
          defaultFirstOption: true,
        },
        {
          label: '标题模板',
          prop: 'titleTemplate',
          type: 'textarea',
        },
        {
          label: '摘要模板',
          prop: 'abstractTemplate',
          type: 'textarea',
        },
        {
          label: '从任务节点启动流程',
          prop: 'isTaskStart',
          type: 'switch',
          labelWidth: 150,
          value: true,
        },
        {
          label: '开启自动去重',
          prop: 'enableAutoDistinct',
          type: 'switch',
          value: true,
        },
        {
          label: '开启审批撤销',
          prop: 'enableRevoke',
          type: 'switch',
          value: true,
        },
        {
          label: '开启意见必填',
          prop: 'enableCommentRequired',
          type: 'switch',
          value: true,
        },
        {
          label: '开启连续处理',
          prop: 'enableContinuousApproval',
          type: 'switch',
          value: true,
        },
      ],
    },
  },
]
