import type { AvueFormColumn } from '@smallwei/avue'

import { EditorSetter } from '../setters'

export const placementDic = [
  { label: '上', value: 'top' },
  { label: '下', value: 'bottom' },
  { label: '左', value: 'left' },
  { label: '右', value: 'right' },
  { label: '上左', value: 'top-start' },
  { label: '上右', value: 'top-end' },
  { label: '下左', value: 'bottom-start' },
  { label: '下右', value: 'bottom-end' },
  { label: '左上', value: 'left-start' },
  { label: '左下', value: 'left-end' },
  { label: '右上', value: 'right-start' },
  { label: '右下', value: 'right-end' },
]
export const positionDic = [
  { label: '左', value: 'left' },
  { label: '右', value: 'right' },
  { label: '顶部', value: 'top' },
]
export const alignDic = [
  { label: '左', value: 'left' },
  { label: '中', value: 'center' },
  { label: '右', value: 'right' },
]
export const sizeDic = [
  { label: '大', value: 'large' },
  { label: '默认', value: 'default' },
  { label: '小', value: 'small' },
]

export const dic: AvueFormColumn[] = [
  {
    label: '字典类型',
    prop: 'dicType',
    type: 'radio',
    button: true,
    dicData: [
      { label: '静态字典', value: 'static' },
      { label: '远端字典', value: 'remote' },
    ],
    value: 'static',
    control(dicType, form) {
      const isRemote = dicType === 'remote'
      const isStatic = dicType === 'static'
      if (isStatic) {
        form.dicUrl = undefined
        form.dicMethod = undefined
        form.dicQuery = undefined
        form.dicHeaders = undefined
        form.props = undefined
        form.dicFormatter = undefined
      }
      else if (isRemote) {
        form.dicData = undefined
      }
      return {
        dicData: { display: isStatic },
        dicUrl: { display: isRemote },
        dicMethod: { display: isRemote },
        dicQuery: { display: isRemote },
        dicHeaders: { display: isRemote },
        props: { display: isRemote },
        dicFormatter: { display: isRemote },
      }
    },
  },
  {
    label: '字典数据',
    prop: 'dicData',
    labelPosition: 'top',
    type: 'dynamic',
    children: {
      column: [
        { label: '名称', prop: 'label' },
        { label: '值', prop: 'value' },
      ],
    },
    value: [
      { label: '选项一', value: '0', id: '0' },
      { label: '选项二', value: '1', id: '1' },
      { label: '选项三', value: '2', id: '2' },
    ],
  },
  {
    label: '字典地址',
    prop: 'dicUrl',
  },
  {
    label: '请求方法',
    prop: 'dicMethod',
    type: 'radio',
    button: true,
    dicData: [
      { label: 'get', value: 'get' },
      { label: 'post', value: 'post' },
    ],
  },
  {
    label: '请求参数',
    prop: 'dicQuery',
    component: EditorSetter,
    valueType: 'object',
    tooltip: true,
    defaultValue: '{}',
  },
  {
    label: '请求头',
    prop: 'dicHeaders',
    component: EditorSetter,
    valueType: 'object',
    tooltip: true,
    defaultValue: '{}',
  },
  {
    label: '字典配置',
    prop: 'props',
    component: EditorSetter,
    valueType: 'object',
    tooltip: true,
    defaultValue: `{
  label: "label",
  value: "value",
  desc: "desc",
  disabled: "disabled",
  children: "children",
  res: ""
}`,
  },
  {
    label: '字典格式化',
    prop: 'dicFormatter',
    component: EditorSetter,
    valueType: 'function',
    tooltip: true,
    defaultValue: '(res) => res',
  },
  {
    label: '级联',
    prop: 'cascader',
    type: 'array',
    labelTip: '在被联动字段的字典地址中可以通过{{key}}获取到当前值',
  },
]
