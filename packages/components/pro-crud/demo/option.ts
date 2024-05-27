import type { ProCrudOption } from '../types'

export const data = [
  { avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
]
export const option: ProCrudOption = {
  viewBtn: false,
  menuType: 'text',
  span: 24,
  mockBtn: true,
  cardOption: {
    actionPosition: 'footer',
    icon: 'avatar',
    title: 'name',
    subtitle: '$sex',
    // content: 'remark',
  },
  listOption: {
    icon: 'avatar',
    title: 'name',
    subtitle: '$sex',
    content: 'remark',
  },
  column: [
    {
      label: '头像',
      prop: 'avatar',
      type: 'upload',
      listType: 'picture-img',
    },
    {
      label: '名称',
      prop: 'name',
    },
    {
      label: '性别',
      prop: 'sex',
      type: 'select',
      dicData: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
    {
      label: '备注',
      prop: 'remark',
      hide: true,
    },
  ],
}

export const cardOption: ProCrudOption = {
  type: 'card',
  ...option,
}

export const listOption: ProCrudOption = {
  type: 'list',
  ...option,
}

export const page = {
  total: 100,
  currentPage: 1,
  pageSize: 10,

}

export const permission = {
  viewBtn: true,
}
