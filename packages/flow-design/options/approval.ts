import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

import { enumToDic } from '@yusui/utils'

import FlowDataOptions from '../components/FlowDataOptions.vue'
import FlowNodeSelect from '../components/FlowNodeSelect.vue'
import { ApprovalReturnMethod, ApprovalTaskNodeType, MultiPersonApprovalType, UserTaskEmptyApproveType } from '../types'

export const approvalColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'approval',
    component: 'avue-form',
    option: {
      menuBtn: false,
      span: 24,
      labelWidth: 110,
      column: [
        {
          label: '任务节点类型',
          prop: 'taskNodeType',
          type: 'radio',
          value: ApprovalTaskNodeType['人工审批'],
          dicData: enumToDic(ApprovalTaskNodeType),
        },
        {
          label: '审批退回类型',
          prop: 'approvalReturnMethod',
          type: 'radio',
          value: ApprovalReturnMethod['上一个节点'],
          dicData: enumToDic(ApprovalReturnMethod),
          control(val: string) {
            return {
              approvalReturnNode: { display: val === ApprovalReturnMethod['自选节点'] },
            }
          },
        },
        {
          label: '审批退回节点',
          prop: 'approvalReturnNode',
          component: FlowNodeSelect,
        },
        {
          label: '多人审批类型',
          prop: 'multiPersonApprovalType',
          type: 'radio',
          value: MultiPersonApprovalType['依次审批'],
          dicData: enumToDic(MultiPersonApprovalType),
        },
        {
          label: '审批人员为空',
          prop: 'userTaskEmptyApproveType',
          type: 'radio',
          value: UserTaskEmptyApproveType['自动通过'],
          dicData: enumToDic(UserTaskEmptyApproveType),
          control(val: string) {
            return {
              userTaskEmptyApproveUser: { display: val === UserTaskEmptyApproveType['自动转交给某个人'] },
            }
          },
        },
        {
          label: '默认审批人',
          prop: 'userTaskEmptyApproveUser',
          component: FlowDataOptions,
          dataKey: 'flowAssigneeUserDic',
        },
        {
          label: '开启回执显示',
          prop: 'enableReceiptDisplay',
          type: 'switch',
          value: true,
        },
      ],
    },
  },
]
