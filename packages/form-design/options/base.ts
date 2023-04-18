import type { Resource } from '../types'

import { findTree, treeMap } from '@yusui/utils'

import { alignDic, placementDic, positionDic, sizeDic } from './dic'
import { RulesSetter, SwitchSetter, ValueSetter } from '../setters'

const basic = [
  {
    label: '字段标识',
    prop: 'prop',
  },
  {
    label: '标签标题',
    prop: 'label',
  },
  {
    label: '标签宽度',
    prop: 'labelWidth',
    type: 'number',
    step: 10,
  },
  {
    label: '标签位置',
    prop: 'labelPosition',
    type: 'radio',
    button: true,
    dicData: positionDic,
  },
  {
    label: '组件尺寸',
    prop: 'size',
    type: 'radio',
    button: true,
    dicData: sizeDic,
  },
  {
    label: '数据类型',
    prop: 'dataType',
    type: 'radio',
    button: true,
    labelWidth: 90,
    labelTip: '会将数据转换为选择的数据类型，如：[1,2,3]=>"1,2,3"',
    dicData: [
      { label: '字符', value: 'string' },
      { label: '数字', value: 'number' },
      { label: '数组', value: 'array' },
    ],
  },
  {
    label: '表单项栅格',
    prop: 'span',
    type: 'number',
    min: 1,
    max: 24,
  },
  {
    label: '字段提示',
    prop: 'tip',
  },
  {
    label: '字段提示位置',
    prop: 'tipPlacement',
    type: 'select',
    dicData: placementDic,
  },
  {
    label: '标签提示',
    prop: 'labelTip',
  },
  {
    label: '标签提示位置',
    prop: 'labelTipPlacement',
    type: 'select',
    dicData: placementDic,
  },
  {
    label: '默认值',
    prop: 'value',
    component: ValueSetter,
  },
  {
    label: '占位内容',
    prop: 'placeholder',
  },
  {
    label: '是否可清空',
    prop: 'clearable',
    component: SwitchSetter,
    defaultValue: true,
  },
  {
    label: '详情模式',
    prop: 'detail',
    component: SwitchSetter,
    defaultValue: false,
  },
  {
    label: '是否只读',
    prop: 'readonly',
    component: SwitchSetter,
    defaultValue: false,
  },
  {
    label: '是否禁用',
    prop: 'disabled',
    component: SwitchSetter,
    defaultValue: false,
  },
  {
    label: '是否可见',
    prop: 'display',
    component: SwitchSetter,
    defaultValue: true,
  },
  {
    label: '校验规则',
    prop: 'rules',
    component: RulesSetter,
  },
]

const dynamic = [
  { labelWidth: 0, type: 'title', modelValue: '子表单/表格属性' },
  {
    label: '宽度',
    prop: 'width',
    type: 'number',
  },
  {
    label: '最小宽度',
    prop: 'minWidth',
    type: 'number',
  },
  {
    label: '固定列',
    prop: 'fixed',
    type: 'radio',
    button: true,
    dicData: [
      { label: '左', value: 'left' },
      { label: '右', value: 'right' },
    ],
  },
  {
    label: '超长省略',
    prop: 'overHidden',
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
    label: '是否可搜索',
    prop: 'search',
    component: SwitchSetter,
    defaultValue: false,
  },
  {
    label: '是否隐藏',
    prop: 'hide',
    component: SwitchSetter,
    defaultValue: false,
  },
]

export const base: Resource['settings'] = ({ elementTree, activeElement }) => {
  const newTree = treeMap([elementTree], (node, index, parent) => ({ ...node, parent }))
  const find = findTree(newTree, node => node.id === activeElement.id)
  if (find?.parent?.name === 'dynamic')
    return [...basic, ...dynamic]
  else
    return basic
}
