import type { Resource } from '../types'

import { alignDic } from '../options'
import { SwitchSetter } from '../setters'

export const dynamic: Resource = {
  name: 'dynamic',
  title: '子表单',
  icon: 'el-icon-grid',
  group: '表单组件',
  isContainer: true,
  rules: {
    parentWhiteList: ['form', 'group'],
    childBlackList: ['group', 'dynamic'],
  },
  designOption: (element) => {
    const { label, prop } = element.props ?? {}
    return {
      column: [{ label, prop, type: 'text' }],
    }
  },
  props: { type: 'dynamic', label: '子表单', children: { column: [] } },
  settings: [
    {
      prop: 'children',
      labelWidth: 0,
      component: 'avue-form',
      option: {
        labelWidth: 100,
        menuBtn: false,
        span: 24,
        column: [
          {
            label: '展示类型',
            prop: 'type',
            type: 'radio',
            button: true,
            value: 'crud',
            dicData: [
              { label: '表格', value: 'crud' },
              { label: '表单', value: 'form' },
            ],
            control(type: string) {
              const isForm = type === 'form'
              const isCrud = type === 'crud'
              return {
                showHeader: { display: isCrud },
                stripe: { display: isCrud },
                border: { display: isCrud },
                headerAlign: { display: isCrud },
                align: { display: isCrud },
                span: { display: isForm },
              }
            },
          },
          {
            label: '显示新增按钮',
            prop: 'addBtn',
            component: SwitchSetter,
            defaultValue: true,
          },
          {
            label: '显示删除按钮',
            prop: 'delBtn',
            component: SwitchSetter,
            defaultValue: true,
          },
          {
            label: '显示序号',
            prop: 'index',
            type: 'switch',
            control(showIndex: boolean, form: any) {
              if (form.type === 'crud' && typeof showIndex === 'boolean')
                form.index = showIndex ? '' : false

              return {}
            },
          },
          {
            label: '显示表头',
            prop: 'showHeader',
            component: SwitchSetter,
            defaultValue: true,
          },
          {
            label: '表格边框',
            prop: 'border',
            component: SwitchSetter,
            defaultValue: true,
          },
          {
            label: '斑马纹',
            prop: 'stripe',
            component: SwitchSetter,
            defaultValue: false,
          },
          {
            label: '表头对齐方式',
            prop: 'headerAlign',
            type: 'radio',
            button: true,
            dicData: alignDic,
          },
          {
            label: '对齐方式',
            prop: 'align',
            type: 'radio',
            button: true,
            dicData: alignDic,
          },
          {
            label: '表单项栅格',
            prop: 'span',
            type: 'number',
          },
          {
            label: '空数据文字',
            prop: 'emptyText',
            type: 'number',
          },
        ],
      },
    },
  ],
}
