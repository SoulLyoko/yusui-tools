import type { UvueFormOption, UvueListOption } from '@yusui/uvue'

import dayjs from 'dayjs'

import CustomComponent from './CustomComponent.vue'

export interface User {
  id?: string
  userName?: string
  nickName?: string
  deptName?: string
}

export const mockData: User[] = Array.from({ length: 20 }).map((e, i) => {
  const id = `${i}`
  return {
    id,
    userName: `admin${id}`,
    nickName: `管理员${id}`,
    deptName: '研发部',
    postName: '前端',
    date: dayjs().add(i, 'day').format('YYYY-MM-DD HH:mm:ss'),
    datetime: dayjs().add(i, 'day').format('YYYY-MM-DD HH:mm:ss'),
  }
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
        title: '岗位',
        prop: 'postName',
        multiple: true,
        dicData: [{ label: '前端', value: '前端' }, { label: '后端', value: '后端' }],
      },
    ],
  },
  formatter(row: any) {
    const { nickName, userName, deptName, postName } = row
    return {
      title: nickName,
      label: `账号：${userName}\n部门：${deptName}\n岗位：${postName}`,
      isLink: true,
    }
  },
}

const change = (e: any) => console.log('🚀 ~ change', e)

const group: UvueFormOption['group'] = [
  {
    label: 'group1',
    prop: 'group1',
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
        label: 'date',
        prop: 'date',
        type: 'date',
        change,
      },
      {
        label: 'datetime',
        prop: 'datetime',
        type: 'datetime',
        change,
      },
    ],
  },
  {
    label: 'group3',
    prop: 'group3',
    collapse: false,
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
    collapse: false,
    column: [
      {
        label: 'dynamic',
        prop: 'dynamic',
        type: 'dynamic',
        children: {
          labelWidth: 70,
          limit: 3,
          column: [
            { label: 'dynamic1', prop: 'dynamic1', required: true, rules: [{ required: true, message: '请输入' }] },
            { label: 'dynamic2', prop: 'dynamic2', value: 'dynamic2' },
            { label: 'dynamic3', prop: 'dynamic3' },
          ],
        },
      },
    ],
  },
]

// const column = group.map(g => g.column).flat();
const column: UvueFormOption['column'] = [
  { label: 'isTabs', prop: 'isTabs', type: 'switch', value: false },
  { label: 'userName', prop: 'userName', disabled: true },
  { label: 'nickName', prop: 'nickName', disabled: true },
  { label: 'deptName', prop: 'deptName', disabled: true },
  { label: 'postName', prop: 'postName', disabled: true },
]

export const formOption = {
  labelWidth: 80,
  tabs: true,
  group,
  column,
}
