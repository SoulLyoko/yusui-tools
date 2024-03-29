import type { UvueFormColumn, UvueFormGroup, UvueListOption } from '@yusui/uvue'

import CustomComponent from './CustomComponent.vue'

export const listOption: UvueListOption = {
  rowKey: 'id',
  cellGroup: { border: false },
  cell: { border: false },
  formatter(row: any) {
    const { nickName, userName, deptName } = row
    return {
      title: nickName,
      label: userName,
      value: deptName,
      isLink: true,
      url: '/pages/index/form',
    }
  },
}

const group: UvueFormGroup[] = [
  {
    label: 'group1',
    prop: 'group1',
    collapse: false,
    column: [
      { label: 'slot', prop: 'slot', type: 'slot' },
      {
        label: 'input',
        prop: 'input',
        type: 'input',
        required: true,
        rules: [{ required: true, message: '请输入' }],
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ input ~ e', e)
        },
      },
      {
        label: 'number',
        prop: 'number',
        type: 'number',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ input ~ e', e)
        },
      },
      {
        label: 'textarea',
        prop: 'textarea',
        type: 'textarea',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ textarea ~ e', e)
        },
      },
      { label: 'custom', prop: 'custom', component: CustomComponent },
    ],
  },
  {
    label: 'group2',
    prop: 'group2',
    column: [
      {
        label: 'select',
        prop: 'select',
        type: 'select',
        dicUrl: '/dict/single',
        allowCreate: true,
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ select ~ e', e)
        },
      },
      {
        label: 'cascader',
        prop: 'cascader',
        type: 'cascader',
        dicUrl: '/dict/tree',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ cascader ~ e', e)
        },
      },
      {
        label: 'datetime',
        prop: '/dict/datetime',
        type: 'date',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ datetime ~ e', e)
        },
      },
    ],
  },
  {
    label: 'group3',
    prop: 'group3',
    column: [
      {
        label: 'checkbox',
        prop: 'checkbox',
        type: 'checkbox',
        dicUrl: '/dict/single',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ checkbox ~ e', e)
        },
      },
      {
        label: 'radio',
        prop: 'radio',
        type: 'radio',
        dicUrl: '/dict/datetime',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ radio ~ e', e)
        },
      },
      {
        label: 'switch',
        prop: 'switch',
        type: 'switch',
        dicUrl: '/dict/single',
        change(e) {
          console.log('🚀 ~ file: option.ts ~ line 33 ~ switch ~ e', e)
        },
      },
    ],
  },
  {
    label: 'group4',
    prop: 'group4',
    column: [
      {
        label: 'dynamic',
        prop: 'dynamic',
        type: 'dynamic',
        children: {
          labelWidth: 70,
          limit: 3,
          column: [
            { label: 'column1', prop: 'column1', rules: [{ required: true, message: '请输入' }] },
            { label: 'column2', prop: 'column2', value: 'column2' },
            { label: 'column3', prop: 'column3' },
          ],
        },
      },
    ],
  },
]

// const column = group.map(g => g.column).flat();
const column: UvueFormColumn[] = [{ label: 'isTabs', prop: 'isTabs', type: 'switch', value: false }]

export const formOption = {
  labelWidth: 70,
  tabs: true,
  group,
  column,
}
