import type { UvueFormOption, UvueListOption } from '@yusui/uvue'

import CustomComponent from './CustomComponent.vue'

export interface User {
  id?: string
  userName?: string
  nickName?: string
  deptName?: string
}

export const mockData: User[] = Array.from({ length: 20 }).map((e, i) => {
  const id = `${i}`
  return { id, userName: `admin${id}`, nickName: `管理员${id}`, deptName: '研发部' }
})

export const listOption: UvueListOption = {
  rowKey: 'id',
  cellGroup: { border: false },
  cell: { border: false },
  filter: {
    items: [
      {
        title: '部门',
        prop: 'deptName',
        dicData: [{ label: '研发部', value: '研发部' }, { label: '市场部', value: '市场部' }],
      },
      {
        title: '部门2',
        prop: 'deptName2',
        multiple: true,
        dicData: [{ label: '研发部', value: '研发部' }, { label: '市场部', value: '市场部' }],
      },
    ],
  },
  formatter(row: any) {
    const { nickName, userName, deptName } = row
    return {
      title: nickName,
      label: userName,
      value: deptName,
      isLink: true,
      url: '/pages/form',
    }
  },
}

const change = (e: any) => console.log('🚀 ~ change', e)

const group: UvueFormOption['group'] = [
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
        change,
      },
      {
        label: 'number',
        prop: 'number',
        type: 'number',
        change,
      },
      {
        label: 'textarea',
        prop: 'textarea',
        type: 'textarea',
        change,
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
        dicUrl: 'single',
        allowCreate: true,
        change,
      },
      {
        label: 'cascader',
        prop: 'cascader',
        type: 'cascader',
        dicUrl: 'tree',
        change,
      },
      {
        label: 'datetime',
        prop: 'datetime',
        type: 'date',
        change,
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
        dicUrl: 'single',
        change,
      },
      {
        label: 'radio',
        prop: 'radio',
        type: 'radio',
        dicUrl: 'datetime',
        change,
      },
      {
        label: 'switch',
        prop: 'switch',
        type: 'switch',
        dicUrl: 'single',
        change,
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
const column: UvueFormOption['column'] = [{ label: 'isTabs', prop: 'isTabs', type: 'switch', value: false }]

export const formOption = {
  labelWidth: 70,
  tabs: true,
  group,
  column,
}
