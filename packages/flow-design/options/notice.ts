import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowDataOptions from '../components/FlowDataOptions.vue'

export const noticeColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'notice',
    component: 'avue-form',
    option: {
      menuBtn: false,
      span: 24,
      labelWidth: 100,
      column: [
        {
          label: '开启退回通知',
          prop: 'enableBackNotice',
          type: 'switch',
          value: false,
          control(display: boolean) {
            return {
              processBackNoticeChannel: { display },
              processBackNoticeTemplate: { display },
            }
          },
        },
        {
          label: '退回通知方式',
          prop: 'processBackNoticeChannel',
          component: FlowDataOptions,
          type: 'radio',
          dataKey: 'noticeTypeDic',
        },
        { label: '退回默认模板', prop: 'processBackNoticeTemplate', type: 'textarea' },

        {
          label: '开启待办通知',
          prop: 'enableTodoNotice',
          type: 'switch',
          value: false,
          control(display: boolean) {
            return {
              processTodoNoticeChannel: { display },
              processTodoNoticeTemplate: { display },
            }
          },
        },
        {
          label: '待办通知方式',
          prop: 'processTodoNoticeChannel',
          component: FlowDataOptions,
          type: 'radio',
          dataKey: 'noticeTypeDic',
        },
        { label: '待办默认模板', prop: 'processTodoNoticeTemplate', type: 'textarea' },

        {
          label: '开启抄送通知',
          prop: 'enableCopyNotice',
          type: 'switch',
          value: false,
          control(display: boolean) {
            return {
              processCopyNoticeChannel: { display },
              processCopyNoticeTemplate: { display },
            }
          },
        },
        {
          label: '抄送通知方式',
          prop: 'processCopyNoticeChannel',
          component: FlowDataOptions,
          type: 'radio',
          dataKey: 'noticeTypeDic',
        },
        { label: '抄送默认模板', prop: 'processCopyNoticeTemplate', type: 'textarea' },

        {
          label: '开启完成通知',
          prop: 'enableCompleteNotice',
          type: 'switch',
          value: false,
          control(display: boolean) {
            return {
              processCompleteNoticeChannel: { display },
              processCompleteNoticeTemplate: { display },
            }
          },
        },
        {
          label: '完成通知方式',
          prop: 'processCompleteNoticeChannel',
          component: FlowDataOptions,
          type: 'radio',
          dataKey: 'noticeTypeDic',
        },
        { label: '完成默认模板', prop: 'processCompleteNoticeTemplate', type: 'textarea' },
      ],
    },
  },
]
